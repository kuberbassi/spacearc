import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Image, BookOpen, Video } from 'lucide-react'
import PageHero from '../../components/PageHero'

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

const sections = [
  { title: 'Photo Gallery', desc: 'Explore our collection of photos from events, workshops, star-gazings, and more.', icon: Image, path: '/gallery', color: '#f97316' },
  { title: 'Our Blogs', desc: 'Articles, stories, and updates from the world of space science and SPACE India.', icon: BookOpen, path: '/blog', color: '#8b5cf6' },
  { title: 'Videos', desc: 'Watch our videos on YouTube — from event highlights to educational content.', icon: Video, path: 'https://www.youtube.com/user/SpaceinternetTV', external: true, color: '#06b6d4' },
]

export default function MediaCenter() {
  return (
    <main>
      <PageHero
        label="Media Center"
        title="Media Center"
        description="Take a spacewalk and explore our space. Expect to find cool and important things happening in Space!"
        breadcrumbs={[{ label: 'Media' }]}
      />
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((s, i) => {
              const Icon = s.icon
              return (
                <FadeIn key={s.title} delay={i * 0.1}>
                  {s.external ? (
                    <a href={s.path} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-8 card-hover block text-center" style={{ textDecoration: 'none' }}>
                      <div style={{ width: 60, height: 60, borderRadius: 14, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                        <Icon size={28} style={{ color: s.color }} />
                      </div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>{s.desc}</p>
                      <span className="btn-primary" style={{ justifyContent: 'center' }}>Explore <ArrowRight size={14} /></span>
                    </a>
                  ) : (
                    <Link to={s.path} className="glass rounded-2xl p-8 card-hover block text-center" style={{ textDecoration: 'none' }}>
                      <div style={{ width: 60, height: 60, borderRadius: 14, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                        <Icon size={28} style={{ color: s.color }} />
                      </div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>{s.desc}</p>
                      <span className="btn-primary" style={{ justifyContent: 'center' }}>Explore <ArrowRight size={14} /></span>
                    </Link>
                  )}
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Instagram feed placeholder */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="section-label">Social Media</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>Follow Us on Instagram</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>@space_india — Discover cool space science content daily.</p>
            <a href="https://www.instagram.com/space_india" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit @space_india <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
