import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-flash/15 text-link dark:text-flash px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Shield size={14} /> Data Protection &amp; Security
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand dark:text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted text-sm">
          Last Updated: October 18, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      {/* Content Body */}
      <div className="bg-surface dark:bg-gray-800 p-8 md:p-10 rounded-2xl border border-border/50 dark:border-gray-700 shadow-sm space-y-8 text-brand dark:text-gray-200 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3 flex items-center gap-2">
            <Eye className="text-flash" size={20} /> 1. Information We Collect
          </h2>
          <p className="text-sm text-muted dark:text-gray-300 mb-3">
            At FlashStore, we prioritize your personal privacy. When you browse or purchase on our platform, we collect only necessary details to fulfill your orders and enhance your shopping experience:
          </p>
          <ul className="list-disc list-inside text-sm text-muted dark:text-gray-300 space-y-1.5 pl-2">
            <li><strong>Contact details:</strong> Name, billing and shipping address, email address, phone number.</li>
            <li><strong>Payment information:</strong> Payment transaction identifiers tokenized via secure PCI-compliant gateways. We do not store raw card numbers.</li>
            <li><strong>Browsing activity:</strong> IP address, device type, operating system, and pages visited via anonymized cookies.</li>
            <li><strong>Communication records:</strong> Customer service inquiries, live chat logs, and email correspondence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3 flex items-center gap-2">
            <Lock className="text-flash" size={20} /> 2. How We Use Your Information
          </h2>
          <p className="text-sm text-muted dark:text-gray-300 mb-3">
            Your information is used strictly to power our services and ensure reliable commerce:
          </p>
          <ul className="list-disc list-inside text-sm text-muted dark:text-gray-300 space-y-1.5 pl-2">
            <li>Fulfilling, shipping, and tracking your store orders.</li>
            <li>Processing secure payments and preventing fraudulent transactions.</li>
            <li>Providing 24/7 customer care and managing returns or refunds.</li>
            <li>Delivering important transactional notifications (order confirmation, tracking updates).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3 flex items-center gap-2">
            <Shield className="text-flash" size={20} /> 3. Data Protection &amp; Security Standards
          </h2>
          <p className="text-sm text-muted dark:text-gray-300">
            We implement industry-standard 256-bit SSL encryption across every endpoint of FlashStore. All payment gateways are certified PCI-DSS Level 1 compliant. We never sell, rent, or trade your personal information to third-party advertisers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand dark:text-white mb-3 flex items-center gap-2">
            <FileText className="text-flash" size={20} /> 4. Your Rights &amp; Choices
          </h2>
          <p className="text-sm text-muted dark:text-gray-300 mb-3">
            In compliance with GDPR, CCPA, and global privacy standards, you maintain complete authority over your data:
          </p>
          <ul className="list-disc list-inside text-sm text-muted dark:text-gray-300 space-y-1.5 pl-2">
            <li><strong>Right to Access:</strong> Request a full copy of the personal data we store about you.</li>
            <li><strong>Right to Rectification:</strong> Update or correct your profile details anytime via your account.</li>
            <li><strong>Right to Erasure:</strong> Request permanent deletion of your account and personal records.</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications with one click at any time.</li>
          </ul>
        </section>

        <section className="border-t border-border/40 dark:border-gray-700 pt-6">
          <h2 className="text-lg font-bold text-brand dark:text-white mb-2">5. Contact Our Data Protection Officer</h2>
          <p className="text-sm text-muted dark:text-gray-300">
            If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our privacy compliance desk at{' '}
            <a href="mailto:privacy@flashstore.com" className="text-link dark:text-flash underline font-semibold">
              privacy@flashstore.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}

