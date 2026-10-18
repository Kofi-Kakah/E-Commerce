import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Zap, Mail, ArrowRight, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 4000)
  }

  return (
    <footer className="bg-brand text-gray-300 mt-20 border-t border-gray-800">
      {/* Newsletter Pre-Footer */}
      <div className="border-b border-gray-800/80 bg-gray-950/40">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Zap className="text-flash" size={20} /> Stay Ahead with Flash Deals
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Subscribe to get exclusive early access to daily flash sales and up to 40% discount coupons.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="bg-flash/15 border border-flash/30 text-flash px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 size={18} /> Thank you! Check your inbox for your 15% discount.
              </div>
            ) : (
              <div className="flex rounded-lg overflow-hidden border border-gray-700 focus-within:border-flash transition shadow-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="bg-gray-900 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-flash hover:bg-flash-hover text-brand font-bold px-5 py-2.5 text-sm inline-flex items-center gap-1.5 transition shrink-0"
                >
                  Subscribe <ArrowRight size={15} />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-2 space-y-3">
          <Link to="/" className="text-2xl font-black text-flash inline-flex items-center gap-1 tracking-tight">
            FLASH<span className="text-white">STORE</span>
          </Link>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Your destination for trending electronics, lifestyle fashion, and modern home essentials. Fast shipping, guaranteed authentic products, and 30-day hassle-free returns.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck size={16} className="text-flash" /> 256-Bit SSL Encrypted
            </span>
            <span>•</span>
            <span>PCI-DSS Level 1</span>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Shop</h4>
          <ul className="text-sm space-y-2.5">
            <li>
              <Link to="/products" className="hover:text-flash transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-flash transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/sale" className="hover:text-flash transition-colors flex items-center gap-1 text-sale">
                Flash Deals <span className="text-[10px] bg-sale text-white px-1.5 py-0.2 rounded font-bold uppercase">Hot</span>
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-flash transition-colors">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-flash transition-colors">
                Cart &amp; Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Support</h4>
          <ul className="text-sm space-y-2.5">
            <li>
              <Link to="/help" className="hover:text-flash transition-colors">
                Help Center &amp; FAQ
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-flash transition-colors">
                Returns &amp; Refunds
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-flash transition-colors">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-flash transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-flash transition-colors">
                Track Order
              </Link>
            </li>
          </ul>
        </div>

        {/* Company & Legal */}
        <div>
          <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Company &amp; Legal</h4>
          <ul className="text-sm space-y-2.5">
            <li>
              <Link to="/about" className="hover:text-flash transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-flash transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-flash transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-flash transition-colors">
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment Badges */}
      <div className="border-t border-gray-800 text-xs py-6 text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} FlashStore Inc. All rights reserved. Built for speed and reliability.
          </div>
          <div className="flex items-center gap-3 text-gray-400 font-semibold text-[11px]">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300">VISA</span>
            <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300">MasterCard</span>
            <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300">Amex</span>
            <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300">PayPal</span>
            <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
