import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { ArrowRight, Layers, Sparkles, Smartphone, Shirt, Home as HomeIcon, HeartPulse, Trophy } from 'lucide-react'

const CATEGORY_META = {
  Electronics: {
    icon: Smartphone,
    color: 'from-blue-600 to-cyan-500',
    desc: 'Laptops, smartphones, audio gear, and cutting-edge tech gadgets.',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
  },
  Fashion: {
    icon: Shirt,
    color: 'from-purple-600 to-pink-500',
    desc: 'Trendsetting apparel, shoes, luxury watches, and modern accessories.',
    img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
  },
  Home: {
    icon: HomeIcon,
    color: 'from-amber-600 to-orange-500',
    desc: 'Stylish furniture, artisanal decor, kitchenware, and lifestyle essentials.',
    img: 'https://images.unsplash.com/photo-1578500475832-3f8f3c0d7f8e?w=600',
  },
  Beauty: {
    icon: HeartPulse,
    color: 'from-rose-600 to-pink-400',
    desc: 'Premium skincare, fragrances, organic cosmetics, and self-care picks.',
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600',
  },
  Sports: {
    icon: Trophy,
    color: 'from-emerald-600 to-teal-500',
    desc: 'High-performance gear, workout equipment, outdoor sports, and apparel.',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
  },
}

export default function Categories() {
  const { products, categories, loading } = useProducts()

  const departmentCategories = categories.filter((c) => c !== 'All')

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Layers size={14} /> Browse Departments
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          Explore by Category
        </h1>
        <p className="text-muted text-base">
          Browse through our extensive collections across top brands and categories at guaranteed low prices.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departmentCategories.map((catName) => {
          const meta = CATEGORY_META[catName] || {
            icon: Sparkles,
            color: 'from-gray-700 to-gray-900',
            desc: 'Discover our top products in this category.',
            img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
          }
          const Icon = meta.icon
          const count = products.filter((p) => p.category === catName).length

          return (
            <Link
              key={catName}
              to={`/products?category=${encodeURIComponent(catName)}`}
              className="group relative rounded-2xl overflow-hidden bg-surface dark:bg-gray-800 border border-border/50 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={meta.img}
                  alt={catName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md">
                      <Icon size={20} className="text-flash" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{catName}</h2>
                      <span className="text-xs text-gray-300">
                        {loading ? 'Counting...' : `${count} Products Available`}
                      </span>
                    </div>
                  </div>
                  <span className="p-2 rounded-full bg-flash text-brand group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-muted text-sm leading-relaxed mb-4">{meta.desc}</p>
                <div className="flex items-center text-sm font-bold text-link dark:text-flash group-hover:underline">
                  Shop {catName} Collection &rarr;
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* All Products CTA */}
      <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-gray-900 via-brand to-gray-950 text-white text-center border border-gray-800 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Can&apos;t find what you&apos;re looking for?</h2>
        <p className="text-gray-300 text-sm max-w-md mb-6">
          Explore our complete catalog of {products.length || 100}+ items across all departments.
        </p>
        <Link
          to="/products"
          className="bg-flash hover:bg-flash-hover text-brand font-bold px-8 py-3 rounded-lg inline-flex items-center gap-2 transition"
        >
          View All Products <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}

