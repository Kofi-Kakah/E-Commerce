import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ArrowRight, Zap, ShieldCheck, Truck, RotateCcw, RefreshCw } from 'lucide-react'

export default function Home() {
  const { categories, featured, flashDeals, loading, error, refresh } = useProducts()
  const hero = useRef()
  useEffect(() => {
    if (!hero.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        hero.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', clearProps: 'all' }
      )
    })
    return () => ctx.revert()
  }, [])
  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Quick checkout & fast shipping' },
    { icon: ShieldCheck, title: 'Secure Payments', desc: 'Your data is always protected' },
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
    { icon: RotateCcw, title: 'Easy Returns', desc: '30-day hassle-free returns' },
  ]
  return (
    <div>
      <section ref={hero} className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand to-gray-900 text-white py-16 md:py-24 border-b border-gray-800">
        {/* Ambient glow orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-flash/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-4 w-96 h-96 bg-flash/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-flash/15 text-flash border border-flash/30 px-3.5 py-1.5 rounded-full mb-5 shadow-[0_0_15px_rgba(57,255,20,0.15)]">
              <Zap size={16} className="fill-flash" />
              <span className="text-sm font-semibold tracking-wide">New Arrivals Daily</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              Shop Smarter. <span className="text-flash drop-shadow-[0_0_25px_rgba(57,255,20,0.4)]">Save Faster.</span>
            </h1>
            <p className="text-gray-200 mb-8 text-lg max-w-lg leading-relaxed">
              Discover trending electronics, fashion, and home essentials at unbeatable prices. Flash deals that don't last long!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-flash hover:bg-flash-hover text-brand font-extrabold px-8 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-[0_0_25px_rgba(57,255,20,0.35)] hover:shadow-[0_0_35px_rgba(57,255,20,0.5)] transition-all transform hover:-translate-y-0.5">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/products?category=Electronics" className="border border-white/20 hover:border-flash hover:text-flash bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-lg inline-block transition-all backdrop-blur-sm">
                Browse Deals
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-flash/40 to-flash/20 rounded-3xl blur-2xl opacity-75"></div>
            <div className="relative rounded-2xl overflow-hidden ring-2 ring-flash/70 shadow-[0_0_50px_rgba(57,255,20,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                alt="FlashStore hero"
                className="w-full h-auto object-cover brightness-105 contrast-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="bg-surface dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-flash/10 flex items-center justify-center">
                  <Icon className="text-flash" size={22} />
                </div>
                <h3 className="font-semibold text-brand dark:text-white">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-brand dark:text-white">Shop by Category</h2>
          <Link to="/products" className="text-link font-semibold flex items-center gap-2 hover:underline">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={cat === 'All' ? '/products' : `/products?category=${cat}`}
              className="bg-surface dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center font-semibold text-brand dark:text-white hover:shadow-md hover:-translate-y-0.5 transition border border-border/30 dark:border-gray-700 hover:border-flash"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-brand dark:text-white">Featured Products</h2>
            <p className="text-muted text-sm mt-0.5">Handpicked top-rated products live from our catalog</p>
          </div>
          <Link to="/products" className="text-link font-semibold flex items-center gap-1 hover:underline text-sm">
            See More <ArrowRight size={14} />
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-center justify-between mb-6">
            <span>Notice: Could not sync fresh products ({error}). Showing cached items.</span>
            <button onClick={refresh} className="flex items-center gap-1 font-bold underline ml-4"><RefreshCw size={14}/> Retry</button>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            <ProductSkeleton count={8} />
          ) : (
            featured.map((p) => <ProductCard key={p.id} product={p} />)
          )}
        </div>
      </section>

      <section className="bg-surface dark:bg-gray-800 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sale/10 text-sale px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
              Flash Savings
            </div>
            <h2 className="text-3xl font-bold text-brand dark:text-white mb-4">Limited-Time Flash Deals</h2>
            <p className="text-muted mb-6">Up to 40% off on our hottest items direct from the warehouse. While supplies last.</p>
            <Link to="/products" className="bg-flash hover:bg-flash-hover text-brand font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition shadow-sm">
              Shop All Deals <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {loading ? (
              <ProductSkeleton count={4} />
            ) : (
              flashDeals.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="relative overflow-hidden rounded-xl group bg-gray-50 dark:bg-gray-900 border border-border/40 dark:border-gray-700">
                  <img src={p.img} alt={p.name} className="w-full h-40 object-contain p-2 group-hover:scale-105 transition duration-300" />
                  {p.discountPercentage > 0 && (
                    <span className="absolute top-2 left-2 bg-sale text-white text-xs px-2 py-0.5 rounded font-bold shadow">
                      {p.discountPercentage}% OFF
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white">
                    <p className="text-xs font-semibold truncate">{p.name}</p>
                    <p className="text-xs font-bold text-flash">${p.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
