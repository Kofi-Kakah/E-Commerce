import { Link } from 'react-router-dom'
import { Zap, ShieldCheck, Heart, Users, Award, Truck, ArrowRight } from 'lucide-react'

export default function About() {
  const stats = [
    { label: 'Happy Customers', value: '150K+' },
    { label: 'Products Delivered', value: '500K+' },
    { label: 'Countries Shipped To', value: '50+' },
    { label: 'Customer Satisfaction', value: '99.8%' },
  ]

  const values = [
    {
      icon: Zap,
      title: 'Lightning Speed',
      desc: 'From next-gen checkout to same-day fulfillment, we engineer speed into every facet of our operations.',
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromised Quality',
      desc: 'Every item in our catalog is vetted and quality-checked before being stored in our temperature-controlled hubs.',
    },
    {
      icon: Heart,
      title: 'Customer-First Care',
      desc: 'Our 24/7 customer advocacy team ensures you are supported with real humans who resolve questions instantly.',
    },
    {
      icon: Award,
      title: 'Guaranteed Best Value',
      desc: 'Direct supplier partnerships cut out unnecessary middleman markups, returning savings straight to your wallet.',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Zap size={14} /> Our Mission &amp; Story
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          Empowering Smarter Shopping Every Day
        </h1>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          FlashStore was built on a bold conviction: online shopping should be lightning fast, beautifully simple, and reliably affordable for everyone, everywhere.
        </p>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 text-center shadow-sm"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-brand dark:text-white mb-1">
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-wider text-muted font-semibold">{s.label}</div>
          </div>
        ))}
      </div>

      {/* The Story Section */}
      <div className="bg-surface dark:bg-gray-800 p-8 md:p-12 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand dark:text-white mb-4">
              From a Passion Project to a Global Marketplace
            </h2>
            <p className="text-muted dark:text-gray-300 text-sm leading-relaxed mb-4">
              Founded in 2024, FlashStore set out to revolutionize how modern shoppers access curated lifestyle goods, top-tier electronics, modern apparel, and home essentials without paying retail markups.
            </p>
            <p className="text-muted dark:text-gray-300 text-sm leading-relaxed">
              Today, our state-of-the-art automated distribution centers ship thousands of packages every day across 50+ countries with industry-leading delivery speeds and an unwavering commitment to 100% customer satisfaction.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800"
              alt="FlashStore Team"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-brand dark:text-white mb-8 text-center">
          The Values That Drive Everything We Do
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={i}
                className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-flash/10 text-flash flex items-center justify-center shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand dark:text-white text-lg mb-1">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-gray-900 via-brand to-gray-950 text-white text-center border border-gray-800 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Ready to experience FlashStore?</h2>
        <p className="text-gray-300 text-sm max-w-md mb-6">
          Explore thousands of premium products with fast free shipping on orders over $50.
        </p>
        <Link
          to="/products"
          className="bg-flash hover:bg-flash-hover text-brand font-bold px-8 py-3 rounded-lg inline-flex items-center gap-2 transition"
        >
          Start Shopping <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}

