import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Handshake, Globe } from 'lucide-react'
import PageHero from '../../components/PageHero'

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export default function CollaborationPartnership() {
  return (
    <main>
      <PageHero
        label="Collaboration & Partnership"
        title="Partner With SPACE India"
        description="Join India's leading astronomy education organization in making space science accessible to all."
        breadcrumbs={[{ label: 'Outreach', path: '/outreach' }, { label: 'Collaboration & Partnership' }]}
      />
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="flex flex-col gap-6">
                {[
                  { title: 'For Schools & Institutions', desc: 'Partner with SPACE India to bring world-class astronomy education to your students. We offer revenue-sharing programs and joint event coordination.', icon: Globe },
                  { title: 'For Government Bodies', desc: 'We partner with central and state government agencies to run national science outreach programs aligned with educational policy goals.', icon: Handshake },
                  { title: 'For Corporate CSR', desc: 'Direct your CSR initiatives towards meaningful STEM education at the grassroots level. Get impact reports and visibility at our events.', icon: Globe },
                  { title: 'For NGOs & Organizations', desc: 'Collaborate on community outreach events, school camps, and awareness programs in underserved communities.', icon: Handshake },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <FadeIn key={item.title} delay={i * 0.1}>
                      <div className="glass rounded-xl p-6 card-hover flex gap-4">
                        <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon size={22} style={{ color: '#f97316' }} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.4rem' }}>{item.title}</h3>
                          <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7 }}>{item.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8 sticky top-24">
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.75rem' }}>Reach Out to Partner</h2>
                <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
                  We believe in the power of partnerships to multiply impact. Let's work together to inspire the next generation of space scientists.
                </p>
                <Link to="/contact-us" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  Contact Us <ArrowRight size={16} />
                </Link>
                <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>Direct contact:</p>
                  <a href="tel:+917402074020" style={{ color: '#f97316', fontSize: '0.9rem', fontWeight: 600 }}>+91-74020 74020</a>
                  <br />
                  <a href="mailto:getintouch@space-india.com" style={{ color: '#94a3b8', fontSize: '0.85rem' }}>getintouch@space-india.com</a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
