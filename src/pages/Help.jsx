import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HelpCircle, Search, ChevronDown, Package, CreditCard, RotateCcw, Truck, MessageCircle, Mail } from 'lucide-react'

const FAQ_DATA = [
  {
    category: 'Orders & Tracking',
    icon: Package,
    questions: [
      {
        q: 'How do I track my order status?',
        a: 'Once your order is processed and dispatched, you will receive a tracking link via email. You can also visit your Profile > Orders page to view live fulfillment updates.',
      },
      {
        q: 'Can I modify or cancel my order after placing it?',
        a: 'Orders can be modified or cancelled within 60 minutes of placement. After this window, our automated fulfillment centers begin processing your package immediately.',
      },
      {
        q: 'What should I do if an item is missing from my delivery?',
        a: 'Occasionally items ship in separate packages from different warehouses. Check your shipping confirmation email for multiple tracking numbers. If missing, please contact support within 48 hours.',
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    icon: Truck,
    questions: [
      {
        q: 'How much does shipping cost?',
        a: 'Standard shipping is completely FREE on all orders over $50! For orders under $50, flat standard shipping is $5.99. Express 2-day delivery is available for $12.99.',
      },
      {
        q: 'How long does standard delivery take?',
        a: 'Standard shipping takes 3-5 business days across the continental US. Express shipping delivers in 1-2 business days. International deliveries usually arrive within 7-14 business days.',
      },
      {
        q: 'Do you offer international shipping?',
        a: 'Yes, FlashStore ships to over 50 countries worldwide. Applicable customs duties and import taxes will be calculated at checkout.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    icon: RotateCcw,
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day hassle-free return guarantee on all unworn, unused items in their original packaging. Return shipping labels are provided free for store exchanges.',
      },
      {
        q: 'How long does it take to receive my refund?',
        a: 'Once our warehouse inspects the returned package (typically 2-3 business days), your refund is immediately processed back to your original payment method within 3-5 banking days.',
      },
      {
        q: 'Can I exchange an item for a different size or color?',
        a: 'Yes! Simply initiate a return through our Returns Portal or contact customer service to request an instant exchange.',
      },
    ],
  },
  {
    category: 'Payments & Security',
    icon: CreditCard,
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and encrypted installment payments.',
      },
      {
        q: 'Is my credit card data and personal information secure?',
        a: 'Yes. All transactions are protected by bank-level 256-bit SSL encryption and processed through PCI-DSS Level 1 certified gateways. We never store raw card numbers.',
      },
    ],
  },
]

export default function Help() {
  const [search, setSearch] = useState('')
  const [openItems, setOpenItems] = useState({})

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const filteredFaqs = FAQ_DATA.map((cat, catIdx) => {
    const questions = cat.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase())
    )
    return { ...cat, catIdx, questions }
  }).filter((cat) => cat.questions.length > 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle size={14} /> Help Center & Knowledge Base
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          How can we help you?
        </h1>
        <p className="text-muted text-base mb-8">
          Find instant answers to common questions about orders, shipping, returns, and your FlashStore account.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. tracking, returns, payment)..."
            className="w-full bg-surface dark:bg-gray-800 border border-border dark:border-gray-700 pl-12 pr-4 py-3.5 rounded-xl text-brand dark:text-white outline-none focus:ring-2 focus:ring-flash shadow-sm"
          />
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        <Link
          to="/shipping"
          className="bg-surface dark:bg-gray-800 p-5 rounded-xl border border-border/50 dark:border-gray-700 hover:border-flash transition text-center group"
        >
          <Truck className="mx-auto text-flash mb-2 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-brand dark:text-white">Shipping Info</h3>
          <p className="text-xs text-muted mt-1">Delivery rates, carriers & timeframes</p>
        </Link>
        <Link
          to="/returns"
          className="bg-surface dark:bg-gray-800 p-5 rounded-xl border border-border/50 dark:border-gray-700 hover:border-flash transition text-center group"
        >
          <RotateCcw className="mx-auto text-flash mb-2 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-brand dark:text-white">Returns & Refunds</h3>
          <p className="text-xs text-muted mt-1">30-day return policy & label prints</p>
        </Link>
        <Link
          to="/contact"
          className="bg-surface dark:bg-gray-800 p-5 rounded-xl border border-border/50 dark:border-gray-700 hover:border-flash transition text-center group"
        >
          <MessageCircle className="mx-auto text-flash mb-2 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-brand dark:text-white">Contact Support</h3>
          <p className="text-xs text-muted mt-1">Chat or email our 24/7 care team</p>
        </Link>
      </div>

      {/* FAQ Accordions */}
      <div className="space-y-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-surface dark:bg-gray-800 rounded-xl border border-border/40">
            <p className="text-3xl mb-2">🔎</p>
            <h3 className="font-bold text-brand dark:text-white">No results found for &ldquo;{search}&rdquo;</h3>
            <p className="text-muted text-sm mt-1 mb-4">Try different keywords or contact our support team directly.</p>
            <button
              onClick={() => setSearch('')}
              className="bg-flash text-brand font-bold px-4 py-2 rounded-lg text-sm"
            >
              Clear Search
            </button>
          </div>
        ) : (
          filteredFaqs.map((section) => {
            const Icon = section.icon
            return (
              <div key={section.category} className="bg-surface dark:bg-gray-800 rounded-2xl border border-border/50 dark:border-gray-700 p-6 shadow-sm">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border/40 dark:border-gray-700">
                  <div className="p-2 rounded-lg bg-flash/10 text-flash">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-brand dark:text-white">{section.category}</h2>
                </div>

                <div className="space-y-3">
                  {section.questions.map((faq, qIdx) => {
                    const isOpen = openItems[`${section.catIdx}-${qIdx}`]
                    return (
                      <div
                        key={qIdx}
                        className="border border-border/40 dark:border-gray-700/60 rounded-xl overflow-hidden transition"
                      >
                        <button
                          onClick={() => toggleAccordion(section.catIdx, qIdx)}
                          className="w-full text-left p-4 flex items-center justify-between gap-4 font-semibold text-brand dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/30 transition"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={18}
                            className={`shrink-0 text-muted transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-link dark:text-flash' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-sm text-muted dark:text-gray-300 leading-relaxed bg-gray-50/50 dark:bg-gray-900/30 border-t border-border/30 dark:border-gray-700/40">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Still Need Help CTA */}
      <div className="mt-14 p-8 rounded-2xl bg-surface dark:bg-gray-800 border border-border/50 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-xl font-bold text-brand dark:text-white">Still have questions?</h3>
          <p className="text-muted text-sm mt-1">Our support specialists are available 24 hours a day, 7 days a week.</p>
        </div>
        <Link
          to="/contact"
          className="bg-flash hover:bg-flash-hover text-brand font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition shadow-sm shrink-0"
        >
          <Mail size={16} /> Contact Support
        </Link>
      </div>
    </div>
  )
}

