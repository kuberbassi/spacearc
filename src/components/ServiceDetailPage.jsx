import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react'
import PageHero from './PageHero'

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Reusable service detail page layout.
 * @param {object} program - Program data from siteData
 * @param {array} breadcrumbs
 * @param {array} relatedPrograms - other programs to show as cards
 */
export default function ServiceDetailPage({ program, breadcrumbs = [], relatedPrograms = [] }) {
  if (!program) return null

  return (
    <main>
      <PageHero
        label={program.mode || 'Program'}
        title={program.title}
        description={program.shortDesc}
        breadcrumbs={breadcrumbs}
      />

      {/* Main content */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: description */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="glass rounded-2xl p-8">
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1.25rem' }}>
                    About This Program
                  </h2>
                  {program.description?.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: sidebar */}
            <div className="flex flex-col gap-6">
              {/* Quick info */}
              <FadeIn delay={0.1}>
                <div className="glass rounded-2xl p-6">
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
                    Program Details
                  </h3>
                  {program.ageGroup && (
                    <div className="flex justify-between text-sm py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ color: '#64748b' }}>Age Group</span>
                      <span style={{ color: '#f1f5f9', fontWeight: 600 }}>{program.ageGroup}</span>
                    </div>
                  )}
                  {program.mode && (
                    <div className="flex justify-between text-sm py-2">
                      <span style={{ color: '#64748b' }}>Mode</span>
                      <span style={{ color: '#f1f5f9', fontWeight: 600 }}>{program.mode}</span>
                    </div>
                  )}
                </div>
              </FadeIn>

              {/* Features */}
              {program.features?.length > 0 && (
                <FadeIn delay={0.15}>
                  <div className="glass rounded-2xl p-6">
                    <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
                      Key Features
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                          <span style={{ color: '#94a3b8' }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )}

              {/* CTA */}
              <FadeIn delay={0.2}>
                <div className="glass rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(124,58,237,0.08))' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>
                    Interested in this program?
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.6 }}>
                    Get in touch with our team and we'll set it up for your school.
                  </p>
                  <Link to="/contact-us" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Contact Us <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Related programs */}
      {relatedPrograms.length > 0 && (
        <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn className="mb-8">
              <p className="section-label">Explore More</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#f1f5f9' }}>Related Programs</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedPrograms.map((rp, i) => (
                <FadeIn key={rp.id} delay={i * 0.08}>
                  <Link to={rp.path} className="glass rounded-xl p-5 card-hover block" style={{ textDecoration: 'none' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.4rem' }}>{rp.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem' }}>{rp.shortDesc}</p>
                    <span style={{ fontSize: '0.78rem', color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      Learn More <ChevronRight size={13} />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
