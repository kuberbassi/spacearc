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

export default function SchoolPrograms() {
  return (
    <main>
      <PageHero
        label="School Programs"
        title="School-Based Programs"
        description="Meticulously curated programs in Astronomy, Space Science & STEM for K-12 students, aligned with NEP 2020."
        breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'School Programs' }]}
      />
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {siteData.services.schoolPrograms.map((prog, i) => (
              <FadeIn key={prog.id} delay={i * 0.08}>
                <Link to={prog.path} className="glass rounded-2xl card-hover block" style={{ textDecoration: 'none', padding: '2rem 2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.65rem' }}>{prog.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.75, marginBottom: '1.25rem' }}>{prog.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
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
