import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import {
  fetchProductsFromApi,
  fetchProductByIdFromApi,
  STORE_CATEGORIES,
  getFeatured,
  getDeals,
  getRelated,
} from '../services/productService'

const ProductContext = createContext(null)

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    async function loadInitialProducts() {
      try {
        const data = await fetchProductsFromApi()
        if (!ignore) {
          setProducts(data)
          setLoading(false)
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || 'Failed to load products')
          setLoading(false)
        }
      }
    }

    loadInitialProducts()

    return () => {
      ignore = true
    }
  }, [])

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchProductsFromApi()
      setProducts(data)
    } catch (err) {
      setError(err.message || 'Failed to load products')
    } finally {
      setLoading(false)
    }
  }, [])

  // Synchronous lookup from memory
  const getProduct = useCallback(
    (id) => {
      return products.find((p) => p.id === Number(id)) || null
    },
    [products]
  )

  // Asynchronous lookup that can hit API directly if product is not yet in state
  const fetchProduct = useCallback(
    async (id) => {
      const existing = products.find((p) => p.id === Number(id))
      if (existing) return existing
      return await fetchProductByIdFromApi(id)
    },
    [products]
  )

  const featured = useMemo(() => getFeatured(products, 8), [products])
  const flashDeals = useMemo(() => getDeals(products, 4), [products])

  const getRelatedProducts = useCallback(
    (currentId, category, count = 4) => {
      return getRelated(products, currentId, category, count)
    },
    [products]
  )

  const value = useMemo(
    () => ({
      products,
      loading,
      error,
      categories: STORE_CATEGORIES,
      refresh,
      getProduct,
      fetchProduct,
      getRelatedProducts,
      featured,
      flashDeals,
    }),
    [products, loading, error, refresh, getProduct, fetchProduct, getRelatedProducts, featured, flashDeals]
  )

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}
