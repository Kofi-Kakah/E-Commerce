import { useParams, Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useRecentlyViewed } from '../context/RecentlyViewedContext'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Heart, ShoppingCart, Check, ShieldCheck, Truck, RotateCcw, ArrowLeft, Star } from 'lucide-react'

export default function ProductDetails() {
  const { id } = useParams()
  const { fetchProduct, getRelatedProducts } = useProducts()
  const { add } = useCart()
  const { toggle, has } = useWishlist()
  const { add: rvAdd } = useRecentlyViewed()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImg, setActiveImg] = useState('')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    let isCurrent = true
    setLoading(true)

    fetchProduct(id).then((p) => {
      if (isCurrent) {
        setProduct(p)
        if (p) {
          setActiveImg(p.img || (p.images && p.images[0]) || '')
          rvAdd(p)
        }
        setLoading(false)
      }
    })

    return () => {
      isCurrent = false
    }
  }, [id, fetchProduct, rvAdd])

  const handleAddToCart = () => {
    if (!product || product.stock === 0) return
    add(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">📦</p>
        <h2 className="text-2xl font-bold text-brand dark:text-white mb-2">Product Not Found</h2>
        <p className="text-muted mb-6">The product you are looking for does not exist or has been removed.</p>
        <Link
          to="/products"
          className="bg-flash text-brand font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-flash-hover transition"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    )
  }

  const relatedList = getRelatedProducts(product.id, product.category, 4)
  const isLiked = has(product.id)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-6">
        <Link to="/" className="hover:text-brand dark:hover:text-white">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-brand dark:hover:text-white">Products</Link>
        <span>/</span>
        <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-brand dark:hover:text-white">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-brand dark:text-gray-300 truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase */}
      <div className="grid md:grid-cols-2 gap-10 bg-surface dark:bg-gray-800 p-6 md:p-10 rounded-2xl border border-border/40 dark:border-gray-700 shadow-sm">
        {/* Gallery */}
        <div>
          <div className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-border/50 dark:border-gray-700 h-80 sm:h-96 flex items-center justify-center p-4">
            <img
              src={activeImg || product.img}
              alt={product.name}
              onError={() => setActiveImg('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400')}
              className="max-h-full max-w-full object-contain"
            />
            {product.oldPrice && (
              <span className="absolute top-4 left-4 bg-sale text-white text-xs px-3 py-1 rounded-full font-bold shadow">
                {product.discountPercentage ? `${product.discountPercentage}% OFF` : 'SALE'}
              </span>
            )}
            <button
              onClick={() => toggle(product)}
              aria-label="Wishlist"
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2.5 shadow hover:scale-110 transition"
            >
              <Heart size={20} className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
            </button>
          </div>

          {/* Image Thumbnails if multiple images exist */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {product.images.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(imgUrl)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 bg-gray-50 dark:bg-gray-900 shrink-0 p-1 transition ${
                    activeImg === imgUrl
                      ? 'border-flash ring-2 ring-flash/30'
                      : 'border-border/60 dark:border-gray-700 hover:border-gray-400'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details & Actions */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="bg-flash/15 text-link dark:text-flash text-xs font-bold px-3 py-1 rounded-full">
              {product.category}
            </span>
            {product.brand && (
              <span className="text-xs text-muted font-medium">Brand: {product.brand}</span>
            )}
            <span className="text-xs text-muted ml-auto font-mono">{product.sku}</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-brand dark:text-white leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.round(product.rating) ? 'fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}
                />
              ))}
            </div>
            <span className="font-bold text-brand dark:text-gray-200 text-sm">{product.rating}</span>
            <span className="text-muted text-sm">({product.reviews} customer reviews)</span>
          </div>

          {/* Pricing */}
          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-brand dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sale line-through text-lg">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-muted dark:text-gray-300 mt-5 leading-relaxed">
            {product.desc}
          </p>

          <p className={`mt-4 font-semibold text-sm ${product.stock > 0 ? 'text-success' : 'text-sale'}`}>
            {product.stock > 0 ? `✓ In stock (${product.stock} units available)` : '✕ Currently Out of Stock'}
          </p>

          {/* Add to Cart Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border/50 dark:border-gray-700">
            <div className="flex items-center border border-border dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3.5 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 font-bold transition"
              >
                -
              </button>
              <span className="px-4 py-2 font-bold min-w-[2.5rem] text-center text-brand dark:text-white">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                className="px-3.5 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 font-bold transition"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`flex-1 min-w-[180px] font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-sm ${
                added
                  ? 'bg-success text-white'
                  : 'bg-flash hover:bg-flash-hover text-brand disabled:opacity-40'
              }`}
            >
              {added ? (
                <>
                  <Check size={18} /> Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart size={18} /> Add to Cart
                </>
              )}
            </button>
          </div>

          {/* Store Guarantees */}
          <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-border/50 dark:border-gray-700 text-center">
            <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/60">
              <Truck size={20} className="text-flash" />
              <span className="text-xs font-semibold text-brand dark:text-white">{product.shipping}</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/60">
              <ShieldCheck size={20} className="text-flash" />
              <span className="text-xs font-semibold text-brand dark:text-white">{product.warranty}</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/60">
              <RotateCcw size={20} className="text-flash" />
              <span className="text-xs font-semibold text-brand dark:text-white">{product.returnPolicy}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews from API */}
      {product.reviewsList && product.reviewsList.length > 0 && (
        <div className="mt-12 bg-surface dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-border/40 dark:border-gray-700 shadow-sm">
          <h2 className="text-2xl font-bold text-brand dark:text-white mb-6">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {product.reviewsList.map((rev, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-900/70 p-4 rounded-xl border border-border/30 dark:border-gray-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        className={si < rev.rating ? 'fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-brand dark:text-gray-200 italic mb-3">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
                <div className="pt-2 border-t border-border/40 dark:border-gray-800 flex justify-between items-center text-xs text-muted">
                  <span className="font-semibold text-brand dark:text-gray-300">{rev.reviewerName}</span>
                  <span>{new Date(rev.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products */}
      {relatedList.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-brand dark:text-white mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedList.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
