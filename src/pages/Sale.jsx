import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import { useState, useMemo } from 'react'
import { Flame, Percent, Tag, Sparkles } from 'lucide-react'

export default function Sale() {
  const { products, loading } = useProducts()
  const [minDiscount, setMinDiscount] = useState(0)

  // Filter products that have a discount
  const saleProducts = useMemo(() => {
    return products
      .filter((p) => p.oldPrice && p.discountPercentage >= minDiscount)
      .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
  }, [products, minDiscount])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white p-8 md:p-12 mb-10 shadow-lg">
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Flame size={16} className="text-yellow-300 fill-yellow-300" /> Flash Deals & Clearance
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Big Savings. Bigger Value.
          </h1>
          <p className="text-rose-100 text-base mb-6 leading-relaxed">
            Grab our steepest discounts direct from top brands. Up to 40% off electronics, fashion, home essentials, and more. While inventory lasts.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-white/80">Filter Discount:</span>
            {[
              { label: 'All Deals', val: 0 },
              { label: '10%+ Off', val: 10 },
              { label: '15%+ Off', val: 15 },
              { label: '20%+ Off', val: 20 },
            ].map((f) => (
              <button
                key={f.val}
                onClick={() => setMinDiscount(f.val)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                  minDiscount === f.val
                    ? 'bg-white text-red-600 shadow'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none text-white hidden md:block">
          <Percent size={360} />
        </div>
      </div>

      {/* Sale Products Grid */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-brand dark:text-white flex items-center gap-2">
            <Tag className="text-sale" size={24} /> On-Sale Items
          </h2>
          <p className="text-sm text-muted">
            {loading ? 'Checking deals...' : `${saleProducts.length} items currently discounted`}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductSkeleton count={8} />
        </div>
      ) : saleProducts.length === 0 ? (
        <div className="bg-surface dark:bg-gray-800 rounded-xl p-12 text-center border border-border/40 dark:border-gray-700">
          <Sparkles className="mx-auto text-yellow-500 mb-3" size={36} />
          <h3 className="text-lg font-bold text-brand dark:text-white mb-1">No deals at this discount tier</h3>
          <p className="text-muted text-sm mb-4">Try choosing a lower discount threshold to see more products.</p>
          <button
            onClick={() => setMinDiscount(0)}
            className="bg-flash text-brand font-bold px-5 py-2 rounded-lg text-sm"
          >
            Show All Deals
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {saleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}

