import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import PageHero from '../../components/PageHero'
import siteData from '../../data/siteData'

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export default function OnlinePrograms() {
  return (
    <main>
      <PageHero
        label="Online Programs"
        title="Online Programs"
        description="World-class astronomy and space science programs accessible from the comfort of your home."
        breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'Online Programs' }]}
      />
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {siteData.services.onlinePrograms.map((prog, i) => (
              <FadeIn key={prog.id} delay={i * 0.1}>
                <Link to={prog.path} className="glass rounded-2xl p-7 card-hover block" style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>{prog.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1rem' }}>{prog.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span style={{ fontSize: '0.72rem', background: `${prog.color}18`, color: prog.color, padding: '0.2rem 0.6rem', borderRadius: '999px', border: `1px solid ${prog.color}30` }}>{prog.ageGroup}</span>
                    <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.05)', color: '#64748b', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>{prog.mode}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: prog.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Learn More <ChevronRight size={14} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
