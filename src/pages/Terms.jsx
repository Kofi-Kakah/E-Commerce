import { Scale, FileCheck, AlertTriangle } from 'lucide-react'

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Scale size={14} /> Legal Agreement
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-muted text-sm">
          Last Updated: October 18, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      {/* Content Body */}
      <div className="bg-surface dark:bg-gray-800 p-8 md:p-10 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm space-y-8 text-brand dark:text-gray-200 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3 flex items-center gap-2">
            <FileCheck className="text-flash" size={20} /> 1. Agreement to Terms
          </h2>
          <p className="text-sm text-muted dark:text-gray-300">
            By accessing, browsing, or purchasing from FlashStore (&ldquo;the Website&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using the Website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3">2. User Accounts &amp; Registration</h2>
          <p className="text-sm text-muted dark:text-gray-300">
            To access certain features (such as order tracking and wishlists), you may register an account. You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3">3. Product Pricing &amp; Order Acceptance</h2>
          <p className="text-sm text-muted dark:text-gray-300 mb-2">
            All prices listed on FlashStore are shown in USD and are subject to change without notice. We reserve the right to limit order quantities, refuse service, or cancel orders at our sole discretion, including cases of suspected typographical errors or inventory inaccuracies.
          </p>
          <p className="text-sm text-muted dark:text-gray-300">
            In the event that an order is cancelled after your payment method has been charged, an immediate full refund will be issued.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3">4. Intellectual Property</h2>
          <p className="text-sm text-muted dark:text-gray-300">
            All graphics, logos, button icons, images, product descriptions, and software on FlashStore are the exclusive property of FlashStore or its content suppliers and are protected under international copyright and trademark laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={20} /> 5. Limitation of Liability
          </h2>
          <p className="text-sm text-muted dark:text-gray-300">
            In no event shall FlashStore, its officers, directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the service or products purchased.
          </p>
        </section>

        <section className="border-t border-border/40 dark:border-gray-700 pt-6">
          <h2 className="text-lg font-bold text-brand dark:text-white mb-2">6. Governing Law &amp; Dispute Resolution</h2>
          <p className="text-sm text-muted dark:text-gray-300">
            These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any dispute shall be settled by binding arbitration.
          </p>
          <p className="text-sm text-muted dark:text-gray-300 mt-3">
            Questions regarding our Terms? Contact{' '}
            <a href="mailto:legal@flashstore.com" className="text-link dark:text-flash underline font-semibold">
              legal@flashstore.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}

