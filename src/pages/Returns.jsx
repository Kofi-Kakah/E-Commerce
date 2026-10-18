import { Link } from 'react-router-dom'
import { RotateCcw, CheckCircle2, Clock, AlertCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'

export default function Returns() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <RotateCcw size={14} /> 30-Day Guarantee
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          Returns &amp; Refunds
        </h1>
        <p className="text-muted text-base">
          We want you to love everything you purchase from FlashStore. If something isn&apos;t quite right, we make returns simple and hassle-free.
        </p>
      </div>

      {/* 3-Step Return Process */}
      <div className="bg-surface dark:bg-gray-800 p-8 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm mb-10">
        <h2 className="text-2xl font-bold text-brand dark:text-white mb-6 text-center">
          How to Make a Return in 3 Easy Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900/60 p-5 rounded-xl border border-border/40 dark:border-gray-700 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-flash text-brand font-extrabold flex items-center justify-center text-lg mb-4">
              1
            </div>
            <h3 className="font-bold text-brand dark:text-white mb-2">Start Your Return</h3>
            <p className="text-sm text-muted">
              Visit your order history or contact our support team with your order number and item details.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/60 p-5 rounded-xl border border-border/40 dark:border-gray-700 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-flash text-brand font-extrabold flex items-center justify-center text-lg mb-4">
              2
            </div>
            <h3 className="font-bold text-brand dark:text-white mb-2">Print Prepaid Label</h3>
            <p className="text-sm text-muted">
              We&apos;ll email you a prepaid shipping label. Securely pack the item in its original box and attach the label.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/60 p-5 rounded-xl border border-border/40 dark:border-gray-700 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-flash text-brand font-extrabold flex items-center justify-center text-lg mb-4">
              3
            </div>
            <h3 className="font-bold text-brand dark:text-white mb-2">Receive Your Refund</h3>
            <p className="text-sm text-muted">
              Once scanned at our fulfillment depot, your refund is issued immediately back to your original payment method.
            </p>
          </div>
        </div>
      </div>

      {/* Return Policy Guidelines */}
      <div className="space-y-6 mb-10">
        <div className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
          <h2 className="text-xl font-bold text-brand dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-success" size={20} /> Eligible for Return
          </h2>
          <ul className="space-y-2.5 text-sm text-muted dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-success font-bold">✓</span> Items within 30 calendar days from the delivery date.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success font-bold">✓</span> Products in unused, unworn, and unwashed condition with original tags intact.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success font-bold">✓</span> Electronics and gadgets including all original cables, chargers, manuals, and accessories.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success font-bold">✓</span> Damaged or defective items reported within 48 hours of delivery receive an immediate free replacement.
            </li>
          </ul>
        </div>

        <div className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
          <h2 className="text-xl font-bold text-brand dark:text-white mb-4 flex items-center gap-2">
            <AlertCircle className="text-sale" size={20} /> Non-Returnable Items
          </h2>
          <ul className="space-y-2.5 text-sm text-muted dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-sale font-bold">✕</span> Final sale / clearance items marked as &ldquo;Non-refundable&rdquo;.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sale font-bold">✕</span> Opened hygiene, beauty, or personal care products (unless defective upon receipt).
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sale font-bold">✕</span> Gift cards and downloadable software keys.
            </li>
          </ul>
        </div>

        <div className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
          <h2 className="text-xl font-bold text-brand dark:text-white mb-4 flex items-center gap-2">
            <Clock className="text-link dark:text-flash" size={20} /> Refund Processing Timelines
          </h2>
          <div className="text-sm text-muted dark:text-gray-300 space-y-3 leading-relaxed">
            <p>
              <strong>Inspection:</strong> 1-2 business days following delivery at our return center.
            </p>
            <p>
              <strong>Bank Credit:</strong> 3-5 business days depending on your financial institution.
            </p>
            <p>
              <strong>Store Credit / Gift Card:</strong> Instant upon package drop-off scan at the carrier.
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-gray-900 via-brand to-gray-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-800">
        <div>
          <h3 className="text-xl font-bold">Need help with a recent order?</h3>
          <p className="text-gray-300 text-sm mt-1">Our support staff can initiate your return label right now.</p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/orders"
            className="bg-flash hover:bg-flash-hover text-brand font-bold px-6 py-3 rounded-lg transition"
          >
            My Orders
          </Link>
          <Link
            to="/contact"
            className="border border-white/20 hover:bg-white/10 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}

