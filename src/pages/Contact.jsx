import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated instant contact submission
    setSubmitted(true)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquare size={14} /> Get In Touch
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          Contact Customer Support
        </h1>
        <p className="text-muted text-base">
          Have a question about an order, delivery, or product? Our support team is here around the clock to help.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-flash/10 text-flash">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-brand dark:text-white text-sm">Email Us</h3>
                <p className="text-xs text-muted">Response in &lt; 2 hours</p>
              </div>
            </div>
            <a
              href="mailto:support@flashstore.com"
              className="text-sm font-semibold text-link dark:text-flash hover:underline break-all"
            >
              support@flashstore.com
            </a>
          </div>

          <div className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-flash/10 text-flash">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-brand dark:text-white text-sm">Call Us</h3>
                <p className="text-xs text-muted">Toll-free customer line</p>
              </div>
            </div>
            <a
              href="tel:18005553527"
              className="text-sm font-semibold text-brand dark:text-white hover:text-flash"
            >
              +1 (800) 555-FLASH
            </a>
          </div>

          <div className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-flash/10 text-flash">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-brand dark:text-white text-sm">Operating Hours</h3>
                <p className="text-xs text-muted">Always active</p>
              </div>
            </div>
            <p className="text-xs text-muted dark:text-gray-300">
              24/7 Live Chat &amp; Email Support<br />
              Phone Support: Mon-Fri 8am - 8pm EST
            </p>
          </div>

          <div className="bg-surface dark:bg-gray-800 p-6 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-flash/10 text-flash">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-brand dark:text-white text-sm">Headquarters</h3>
                <p className="text-xs text-muted">FlashStore Logistics Hub</p>
              </div>
            </div>
            <p className="text-xs text-muted dark:text-gray-300">
              100 Commerce Way, Suite 400<br />
              Wilmington, DE 19801, USA
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-surface dark:bg-gray-800 p-8 md:p-10 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/15 text-success flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="text-2xl font-bold text-brand dark:text-white mb-2">Message Sent Successfully!</h2>
                <p className="text-muted text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out, <span className="font-bold text-brand dark:text-white">{formData.name}</span>. A support specialist has received your inquiry and will email you back at <span className="font-semibold text-brand dark:text-white">{formData.email}</span> within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', orderId: '', subject: 'general', message: '' })
                  }}
                  className="bg-flash text-brand font-bold px-6 py-2.5 rounded-lg text-sm transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-brand dark:text-white mb-4">Send Us a Direct Message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-background dark:bg-gray-900 border border-border dark:border-gray-700 rounded-lg p-3 text-sm text-brand dark:text-white outline-none focus:ring-2 focus:ring-flash"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-background dark:bg-gray-900 border border-border dark:border-gray-700 rounded-lg p-3 text-sm text-brand dark:text-white outline-none focus:ring-2 focus:ring-flash"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1">
                      Order ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.orderId}
                      onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                      placeholder="e.g. #FS-9842"
                      className="w-full bg-background dark:bg-gray-900 border border-border dark:border-gray-700 rounded-lg p-3 text-sm text-brand dark:text-white outline-none focus:ring-2 focus:ring-flash"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1">
                      Inquiry Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-background dark:bg-gray-900 border border-border dark:border-gray-700 rounded-lg p-3 text-sm text-brand dark:text-white outline-none focus:ring-2 focus:ring-flash"
                    >
                      <option value="general">General Question</option>
                      <option value="tracking">Order Tracking &amp; Delivery</option>
                      <option value="returns">Returns &amp; Refunds</option>
                      <option value="payments">Billing &amp; Payments</option>
                      <option value="wholesale">Wholesale &amp; Partnerships</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your question or how we can help in detail..."
                    className="w-full bg-background dark:bg-gray-900 border border-border dark:border-gray-700 rounded-lg p-3 text-sm text-brand dark:text-white outline-none focus:ring-2 focus:ring-flash resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-flash hover:bg-flash-hover text-brand font-bold px-8 py-3.5 rounded-lg inline-flex items-center gap-2 transition shadow-sm"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

