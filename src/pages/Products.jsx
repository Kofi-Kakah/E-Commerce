import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import { useState, useMemo, useEffect } from 'react'
import { Filter, SlidersHorizontal, RefreshCw, X } from 'lucide-react'

export default function Products() {
  const [sp, setSp] = useSearchParams()
  const { products, categories, loading, error, refresh } = useProducts()

  const [cat, setCat] = useState(sp.get('category') || 'All')
  const [sort, setSort] = useState('default')
  const [maxPrice, setMaxPrice] = useState(2000)
  const search = sp.get('search') || ''

  // Sync category state when URL query changes
  useEffect(() => {
    const urlCat = sp.get('category')
    if (urlCat) {
      setCat(urlCat)
    }
  }, [sp])

  // Compute highest product price for dynamic slider
  const highestPrice = useMemo(() => {
    if (products.length === 0) return 1000
    return Math.ceil(Math.max(...products.map((p) => p.price)))
  }, [products])

  useEffect(() => {
    if (highestPrice > 0 && maxPrice === 2000) {
      setMaxPrice(highestPrice)
    }
  }, [highestPrice, maxPrice])

  const handleCategorySelect = (selectedCategory) => {
    setCat(selectedCategory)
    const newSp = new URLSearchParams(sp)
    if (selectedCategory === 'All') {
      newSp.delete('category')
    } else {
      newSp.set('category', selectedCategory)
    }
    setSp(newSp)
  }

  const clearFilters = () => {
    setCat('All')
    setSort('default')
    setMaxPrice(highestPrice)
    setSp({})
  }

  const list = useMemo(() => {
    const q = search.toLowerCase().trim()
    let filtered = products.filter((p) => {
      const matchCat =
        cat === 'All' ||
        p.category === cat ||
        (p.subCategory && p.subCategory.toLowerCase() === cat.toLowerCase())

      const matchPrice = p.price <= maxPrice

      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.desc && p.desc.toLowerCase().includes(q))

      return matchCat && matchPrice && matchSearch
    })

    if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
    if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)
    if (sort === 'discount') filtered = [...filtered].sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))

    return filtered
  }, [products, cat, sort, maxPrice, search])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Mobile Category Bar */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => handleCategorySelect(c)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold transition ${
              cat === c
                ? 'bg-flash text-brand shadow-sm'
                : 'bg-surface dark:bg-gray-800 text-muted border border-border/50 dark:border-gray-700'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="w-64 hidden md:block shrink-0">
          <div className="bg-surface dark:bg-gray-800 p-5 rounded-xl border border-border/40 dark:border-gray-700 sticky top-20 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border/40 dark:border-gray-700">
              <span className="font-bold flex items-center gap-2 text-brand dark:text-white">
                <SlidersHorizontal size={18} /> Filters
              </span>
              {(cat !== 'All' || maxPrice < highestPrice || sort !== 'default' || search) && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-sale hover:underline font-semibold flex items-center gap-1"
                >
                  <X size={12} /> Reset
                </button>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3">Categories</h3>
              <div className="space-y-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => handleCategorySelect(c)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      cat === c
                        ? 'bg-flash/15 text-link dark:text-flash font-bold border-l-4 border-flash'
                        : 'text-muted hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-brand dark:hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">Max Price</h3>
                <span className="font-bold text-brand dark:text-white text-sm">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="0"
                max={highestPrice || 1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-link dark:accent-flash cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted mt-1">
                <span>$0</span>
                <span>${highestPrice}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted mb-2">Sort By</h3>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full bg-background dark:bg-gray-900 border border-border dark:border-gray-700 rounded-lg p-2.5 text-sm text-brand dark:text-white outline-none focus:ring-2 focus:ring-flash"
              >
                <option value="default">Default (Featured)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-border/40 dark:border-gray-700 gap-2">
            <div>
              <h1 className="text-2xl font-bold text-brand dark:text-white">
                {cat === 'All' ? 'All Products' : cat}
              </h1>
              {search && (
                <p className="text-sm text-muted mt-0.5">
                  Showing results for &ldquo;<span className="font-semibold text-brand dark:text-white">{search}</span>&rdquo;
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted">
              <span>{loading ? 'Fetching products...' : `${list.length} products found`}</span>
              <button
                onClick={refresh}
                title="Refresh products from API"
                className="hover:text-link dark:hover:text-flash flex items-center gap-1 text-xs font-semibold"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-center justify-between mb-6">
              <span>Notice: Could not sync fresh products from API ({error}). Showing cached items.</span>
              <button onClick={refresh} className="font-bold underline text-sm ml-4">Retry</button>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductSkeleton count={9} />
            </div>
          ) : list.length === 0 ? (
            <div className="bg-surface dark:bg-gray-800 rounded-xl p-12 text-center border border-border/40 dark:border-gray-700 mt-4">
              <p className="text-4xl mb-3">🔍</p>
              <h3 className="text-lg font-bold text-brand dark:text-white mb-1">No products found</h3>
              <p className="text-muted text-sm max-w-sm mx-auto mb-6">
                We couldn&apos;t find any items matching your current filters. Try expanding your search or adjusting the price range.
              </p>
              <button
                onClick={clearFilters}
                className="bg-flash hover:bg-flash-hover text-brand font-bold px-6 py-2.5 rounded-lg text-sm shadow-sm transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

