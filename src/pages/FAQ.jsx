import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import siteData from '../data/siteData'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} viewport={{ once: true }}>
    {children}
  </motion.div>
)

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <FadeIn delay={index * 0.07}>
      <div className="glass rounded-xl overflow-hidden mb-4">
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full flex items-center justify-between gap-4 p-5 text-left"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.95rem', lineHeight: 1.5 }}>{q}</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, color: '#f97316' }}>
            <ChevronDown size={20} />
          </motion.span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 1.25rem 1.25rem', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.8, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ paddingTop: '1rem' }}>{a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}

export default function FAQ() {
  return (
    <main>
      <PageHero
        label="Help Center"
        title="Frequently Asked Questions"
        description="Find answers to common questions about SPACE India programs, registration, and more."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      {/* FAQ list */}
      <section className="section-py">
        <div className="max-w-3xl mx-auto px-4">
          {siteData.faqs.map((f, i) => (
            <FAQItem key={i} q={f.question} a={f.answer} index={i} />
          ))}
        </div>
      </section>

      {/* About SPACE */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <HelpCircle size={40} style={{ color: '#f97316', margin: '0 auto 1rem' }} />
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.75rem' }}>About SPACE</h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
                SPACE (Space Technology And Astronomy Cell) is India's leading space science education organization. Since our founding, we have been on a mission to make astronomy and space science accessible, engaging, and transformative for students across the country. Our programs span school clubs, mobile planetariums, online courses, astronomy camps, and competition training — all anchored by passionate educators and real scientific instruments.
              </p>
            </div>
            <div className="text-center">
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Still have questions? We're happy to help.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <Link to="/services" className="btn-outline">Explore Programs</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
