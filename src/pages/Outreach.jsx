import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Users, Star } from 'lucide-react'
import PageHero from '../components/PageHero'

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

const events = [
  { title: 'National Science Day', desc: 'Annual celebration inspiring young minds to take up science careers.', icon: Star },
  { title: 'International Astronomy Day', desc: 'Events held globally with SPACE India playing a key role across India.', icon: Globe },
  { title: 'Astro Carnival', desc: 'Massive public astronomy events at iconic venues bringing space science to all.', icon: Users },
  { title: 'Jantar Mantar Programs', desc: 'Heritage astronomy walks and observation sessions at Jantar Mantar.', icon: Star },
  { title: 'Antariksh Darshan', desc: 'Community astronomy events connecting people with the night sky.', icon: Globe },
  { title: 'School Mega Events', desc: 'Organizing large-scale science fairs and space exhibitions in schools.', icon: Users },
]

export default function Outreach() {
  return (
    <main>
      <PageHero
        label="Outreach"
        title="Outreach Programs"
        description="SPACE India conducts Astronomy & Space Science Events, Projects and Activities on various International occasions, inspiring communities nationwide."
        breadcrumbs={[{ label: 'Outreach' }]}
      />

      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ marginBottom: '5rem' }}>
            <FadeIn>
              <p className="section-label">About Outreach</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Bringing Space Science to Every Corner of India
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                Outreach is SPACE India's community engagement arm, dedicated to conducting Astronomy and Space Science events, projects, and activities on various national and international occasions.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem' }}>
                From organizing large-scale public star-gazing events to partnering with government bodies for national science days — SPACE India's outreach creates meaningful impact at the grassroots level.
              </p>
              <Link to="/outreach/collaboration-partnership" className="btn-primary">
                Collaboration & Partnership <ArrowRight size={16} />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {['Events Conducted', 'Cities Reached', 'People Impacted', 'Partner Organizations'].map((item, i) => (
                  <div key={item} className="glass rounded-2xl p-6 text-center card-hover">
                    <div className="stat-number">{['500+', '100+', '2M+', '50+'][i]}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.5rem' }}>{item}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Events grid */}
          <FadeIn>
            <p className="section-label" style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>Our Events & Activities</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginTop: '0.5rem' }}>
            {events.map((e, i) => {
              const Icon = e.icon
              return (
                <FadeIn key={e.title} delay={i * 0.08}>
                  <div className="glass rounded-2xl p-6 card-hover">
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={22} style={{ color: '#f97316' }} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>{e.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7 }}>{e.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
