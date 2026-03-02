import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'

export default function PrivacyPolicy() {
  return (
    <main>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How SPACE India collects, uses, and protects your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="glass rounded-2xl p-8">
              <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '2rem' }}>Last updated: January 2026</p>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                At SPACE India (Space Technology And Astronomy Cell), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or interact with our programs and services.
              </p>
              <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                  Full privacy policy content will be provided by the SPACE India legal team. This page will be updated with the complete privacy policy document before the site goes live.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>Key Highlights</h3>
                {[
                  'We only collect information necessary to provide our services.',
                  'Your personal data is never sold to third parties.',
                  'We use industry-standard security measures to protect your data.',
                  'You can request deletion of your data at any time.',
                  'Cookies are used only for essential site functionality and analytics.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 mb-3">
                    <span style={{ color: '#f97316', marginTop: '2px' }}>✓</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  For privacy-related queries, contact us at{' '}
                  <a href="mailto:info@space-india.com" style={{ color: '#f97316' }}>info@space-india.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
