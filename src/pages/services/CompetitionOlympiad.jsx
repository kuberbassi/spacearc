import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Trophy, ArrowRight, Star } from 'lucide-react'
import PageHero from '../../components/PageHero'
import siteData from '../../data/siteData'

const data = siteData.services.competitionOlympiad

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export default function CompetitionOlympiad() {
  return (
    <main>
      <PageHero
        label="Competition & Olympiad"
        title={data.title}
        description="Challenge your knowledge and compete with peers on a national and international stage."
        breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'Competition & Olympiad' }]}
      />
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="glass rounded-2xl p-8">
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1.25rem' }}>About These Programs</h2>
                  {data.description?.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>{para}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <div className="glass rounded-2xl p-6">
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>Events & Competitions</h3>
                  <ul className="flex flex-col gap-2">
                    {data.events.map(e => (
                      <li key={e} className="flex items-center gap-2 text-sm">
                        <Trophy size={13} style={{ color: '#f59e0b', flexShrink: 0 }} />
                        <span style={{ color: '#94a3b8' }}>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="glass rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(124,58,237,0.08))' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>Enroll your school</h3>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1rem' }}>Get your students competing at the highest levels.</p>
                  <Link to="/contact-us" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Contact Us <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
