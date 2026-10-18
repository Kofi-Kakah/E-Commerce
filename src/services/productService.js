// Product API service connecting to DummyJSON API with local fallback
import { products as fallbackProducts, categories as fallbackCategories } from '../data/products'

const API_BASE_URL = 'https://dummyjson.com/products'

// Mapping subcategories from DummyJSON to FlashStore's core categories
const CATEGORY_MAP = {
  // Electronics
  smartphones: 'Electronics',
  laptops: 'Electronics',
  tablets: 'Electronics',
  'mobile-accessories': 'Electronics',

  // Fashion
  'mens-shirts': 'Fashion',
  'mens-shoes': 'Fashion',
  'mens-watches': 'Fashion',
  'womens-bags': 'Fashion',
  'womens-dresses': 'Fashion',
  'womens-jewellery': 'Fashion',
  'womens-shoes': 'Fashion',
  'womens-watches': 'Fashion',
  tops: 'Fashion',
  sunglasses: 'Fashion',

  // Home
  furniture: 'Home',
  'home-decoration': 'Home',
  'kitchen-accessories': 'Home',
  groceries: 'Home',

  // Beauty
  beauty: 'Beauty',
  fragrances: 'Beauty',
  'skin-care': 'Beauty',

  // Sports & Automotive
  'sports-accessories': 'Sports',
  motorcycle: 'Sports',
  vehicle: 'Sports',
}

export const STORE_CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports']

/**
 * Normalizes a product from DummyJSON into FlashStore's unified format
 */
export function normalizeProduct(raw) {
  if (!raw) return null

  const mainCategory =
    CATEGORY_MAP[raw.category] ||
    (raw.category ? raw.category.charAt(0).toUpperCase() + raw.category.slice(1) : 'Electronics')

  const price = Number(raw.price) || 0
  const discount = Number(raw.discountPercentage) || 0
  const oldPrice = discount > 3 ? Number((price / (1 - discount / 100)).toFixed(2)) : null

  const rating = typeof raw.rating === 'number' ? Number(raw.rating.toFixed(1)) : 4.5
  const reviewsCount = Array.isArray(raw.reviews)
    ? raw.reviews.length * 28 + ((raw.id || 1) * 7)
    : 45

  // Ensure high quality image with fallback
  const primaryImg =
    raw.thumbnail ||
    (Array.isArray(raw.images) && raw.images.length > 0 ? raw.images[0] : null) ||
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'

  const allImages = Array.isArray(raw.images) && raw.images.length > 0
    ? raw.images
    : [primaryImg]

  return {
    id: raw.id,
    name: raw.title || raw.name || 'Product',
    title: raw.title || raw.name || 'Product',
    category: mainCategory,
    subCategory: raw.category || '',
    price: price,
    oldPrice: oldPrice,
    discountPercentage: Math.round(discount),
    rating: rating,
    reviews: reviewsCount,
    reviewsList: Array.isArray(raw.reviews) ? raw.reviews : [],
    stock: typeof raw.stock === 'number' ? raw.stock : 12,
    img: primaryImg,
    images: allImages,
    desc: raw.description || raw.desc || 'Quality product available at FlashStore.',
    description: raw.description || raw.desc || 'Quality product available at FlashStore.',
    brand: raw.brand || 'FlashStore Premium',
    sku: raw.sku || `FS-${raw.id || 100}`,
    warranty: raw.warrantyInformation || '1-Year Standard Warranty',
    shipping: raw.shippingInformation || 'Free shipping on orders over $50',
    returnPolicy: raw.returnPolicy || '30-Day Hassle-Free Returns',
  }
}

/**
 * Fetch all products from API (fetches full product catalog with limit=0)
 */
export async function fetchProductsFromApi() {
  try {
    const res = await fetch(`${API_BASE_URL}?limit=0`)
    if (!res.ok) {
      throw new Error(`API responded with HTTP ${res.status}`)
    }
    const data = await res.json()
    if (!data.products || !Array.isArray(data.products)) {
      throw new Error('Invalid products array from API')
    }
    return data.products.map(normalizeProduct)
  } catch (error) {
    console.warn('Failed to fetch products from API, falling back to local dataset:', error.message)
    return fallbackProducts.map(normalizeProduct)
  }
}

/**
 * Fetch a single product by ID from API
 */
export async function fetchProductByIdFromApi(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/${id}`)
    if (!res.ok) {
      throw new Error(`API responded with HTTP ${res.status}`)
    }
    const data = await res.json()
    return normalizeProduct(data)
  } catch (error) {
    console.warn(`Failed to fetch product ${id} from API, using fallback:`, error.message)
    const local = fallbackProducts.find((p) => p.id === Number(id))
    return local ? normalizeProduct(local) : null
  }
}

/**
 * Helper to compute featured products (top rated)
 */
export function getFeatured(productsList, count = 8) {
  if (!productsList || productsList.length === 0) return []
  return [...productsList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count)
}

/**
 * Helper to compute flash deals (highest discount)
 */
export function getDeals(productsList, count = 4) {
  if (!productsList || productsList.length === 0) return []
  return [...productsList]
    .filter((p) => p.discountPercentage && p.discountPercentage > 10)
    .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
    .slice(0, count)
}

/**
 * Helper to compute related products
 */
export function getRelated(productsList, currentId, category, count = 4) {
  if (!productsList || productsList.length === 0) return []
  const sameCategory = productsList.filter(
    (p) => p.id !== Number(currentId) && p.category === category
  )
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count)
  }
  const remaining = productsList.filter(
    (p) => p.id !== Number(currentId) && p.category !== category
  )
  return [...sameCategory, ...remaining].slice(0, count)
}

