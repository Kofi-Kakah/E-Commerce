import { Link } from 'react-router-dom'
import { Truck, Clock, Globe, ShieldCheck, Check, PackageCheck, AlertCircle } from 'lucide-react'

export default function Shipping() {
  const tiers = [
    {
      name: 'Standard Shipping',
      time: '3 - 5 Business Days',
      cost: 'FREE on orders over $50 ($5.99 otherwise)',
      desc: 'Reliable ground delivery via USPS and FedEx Ground.',
      popular: true,
    },
    {
      name: 'Express 2-Day Delivery',
      time: '2 Business Days',
      cost: '$12.99 Flat Rate',
      desc: 'Expedited air delivery for orders placed before 2 PM EST.',
      popular: false,
    },
    {
      name: 'Overnight Priority',
      time: '1 Business Day (Next Day)',
      cost: '$24.99 Flat Rate',
      desc: 'Next business day morning arrival via FedEx Priority.',
      popular: false,
    },
    {
      name: 'International Shipping',
      time: '7 - 14 Business Days',
      cost: 'Calculated at checkout by country',
      desc: 'Delivered to 50+ countries with full door-to-door tracking via DHL Express.',
      popular: false,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Truck size={14} /> Fast &amp; Reliable Delivery
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          Shipping &amp; Delivery Information
        </h1>
        <p className="text-muted text-base">
          Every FlashStore package is tracked, insured, and handled with extreme care from our automated logistics hubs directly to your doorstep.
        </p>
      </div>

      {/* Free Shipping Highlight Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 text-white rounded-2xl p-6 md:p-8 mb-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
            <Truck size={28} className="text-flash" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Free Shipping on All Orders Over $50</h2>
            <p className="text-emerald-100 text-sm mt-1">
              No promo code needed. Free standard delivery is automatically applied at checkout.
            </p>
          </div>
        </div>
        <Link
          to="/products"
          className="bg-white text-emerald-800 font-bold px-6 py-3 rounded-lg text-sm shrink-0 hover:bg-emerald-50 transition shadow"
        >
          Shop Now
        </Link>
      </div>

      {/* Shipping Options Table/Grid */}
      <h2 className="text-2xl font-bold text-brand dark:text-white mb-6">Delivery Options &amp; Rates</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`p-6 rounded-2xl border transition-all ${
              tier.popular
                ? 'bg-surface dark:bg-gray-800 border-flash shadow-md ring-1 ring-flash'
                : 'bg-surface dark:bg-gray-800 border-border/50 dark:border-gray-700'
            }`}
          >
            {tier.popular && (
              <span className="bg-flash text-brand text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3 inline-block">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-brand dark:text-white">{tier.name}</h3>
            <div className="flex items-baseline gap-2 mt-2 mb-3">
              <span className="text-2xl font-extrabold text-link dark:text-flash">{tier.cost}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted mb-4 font-medium">
              <Clock size={16} /> Estimated: {tier.time}
            </div>
            <p className="text-sm text-muted dark:text-gray-300 leading-relaxed border-t border-border/40 dark:border-gray-700 pt-3">
              {tier.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Helpful Shipping Details */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl border border-border/50 dark:border-gray-700">
          <PackageCheck className="text-flash mb-3" size={28} />
          <h3 className="font-bold text-brand dark:text-white mb-2">Same-Day Processing</h3>
          <p className="text-sm text-muted">
            Orders placed Monday through Friday before 2:00 PM EST are packaged and handed to carriers the exact same day.
          </p>
        </div>

        <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl border border-border/50 dark:border-gray-700">
          <Globe className="text-flash mb-3" size={28} />
          <h3 className="font-bold text-brand dark:text-white mb-2">Real-Time Tracking</h3>
          <p className="text-sm text-muted">
            You will receive a live tracking link via email and SMS the moment your parcel scans out of our distribution center.
          </p>
        </div>

        <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl border border-border/50 dark:border-gray-700">
          <ShieldCheck className="text-flash mb-3" size={28} />
          <h3 className="font-bold text-brand dark:text-white mb-2">100% Insured Packages</h3>
          <p className="text-sm text-muted">
            All shipments include complimentary insurance protection against carrier loss, theft, or damage during transit.
          </p>
        </div>
      </div>

      {/* Carrier Partners */}
      <div className="p-8 rounded-2xl bg-surface dark:bg-gray-800 border border-border/50 dark:border-gray-700 text-center">
        <h3 className="text-sm uppercase tracking-wider text-muted font-bold mb-4">
          Trusted Global Carrier Partners
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 text-xl font-bold text-muted dark:text-gray-400">
          <span>FedEx</span>
          <span>UPS</span>
          <span>DHL Express</span>
          <span>USPS Priority</span>
        </div>
      </div>
    </div>
  )
}

