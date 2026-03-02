import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'

export default function TermsConditions() {
  return (
    <main>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        description="Terms and conditions governing use of SPACE India's website and services."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="glass rounded-2xl p-8">
              <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '2rem' }}>Last updated: January 2026</p>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                By accessing and using the SPACE India website and services, you accept and agree to be bound by these Terms and Conditions. Please read them carefully before using our services or registering for any programs. If you do not agree with any part of these terms, please do not use our website.
              </p>
              <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                  Full terms and conditions will be provided by the SPACE India legal team. This page will be updated with the complete legal document before the site goes live.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>General Terms</h3>
                {[
                  'You must be at least 13 years old to use this website.',
                  'All content on this site is the property of SPACE India unless otherwise noted.',
                  'Unauthorized commercial use of our content is prohibited.',
                  'Program fees are non-refundable unless stated otherwise.',
                  'SPACE India reserves the right to modify programs, schedules, and fees.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 mb-3">
                    <span style={{ color: '#f97316', marginTop: '2px' }}>•</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  For legal queries, contact us at{' '}
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
