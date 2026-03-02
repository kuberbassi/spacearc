import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Star, Globe, Award, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} viewport={{ once: true }}>
    {children}
  </motion.div>
)

const communityCards = [
  { icon: <Users size={36} />, title: 'Space Alumni', desc: 'A growing network of students who have been part of SPACE programs and are now pursuing their dreams in science and technology.', link: '/space-alumni', color: '#f97316' },
  { icon: <Star size={36} />, title: 'Student Projects', desc: 'Innovative projects by students inspired by their SPACE learning experience — from telescope builds to astrophotography portfolios.', link: '#', color: '#8b5cf6' },
  { icon: <Globe size={36} />, title: 'Community Events', desc: 'Star parties, science fairs, and outreach events organized by community members across India.', link: '/outreach', color: '#06b6d4' },
  { icon: <Award size={36} />, title: 'Achievements', desc: 'Our community members have won national and international science olympiads, scholarships, and space competitions.', link: '#', color: '#f59e0b' },
]

export default function SpaceCommunity() {
  return (
    <main>
      <PageHero
        label="Our Community"
        title="The SPACE India Community"
        description="A thriving network of space enthusiasts, students, educators, and alumni bound together by a shared love for the cosmos."
        breadcrumbs={[{ label: 'Space Community' }]}
      />

      {/* Intro */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="section-label">Who We Are</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', margin: '0.75rem 0 1.25rem' }}>
                Building India's Largest Space Science Community
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                The SPACE India Community is more than a network — it is a movement. From school students discovering the night sky for the first time to professional astronomers mentoring the next generation, our community spans every level of engagement with space science.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                With over 1.5 million students reached across 1000+ schools and 100+ cities, we have cultivated a community that is passionate, curious, and driven to explore the universe.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Join Our Community <ArrowRight size={16} />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1.5M+', label: 'Students Reached' },
                  { value: '1000+', label: 'Schools Engaged' },
                  { value: '100+', label: 'Cities Covered' },
                  { value: '400+', label: 'Activities Conducted' },
                ].map((s, i) => (
                  <div key={i} className="glass rounded-xl p-5 text-center">
                    <p className="stat-number" style={{ marginBottom: '0.25rem' }}>{s.value}</p>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Community pillars */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="section-label">Community Pillars</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#f1f5f9', marginTop: '0.75rem' }}>
                Explore the Community
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {communityCards.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 card-hover h-full">
                  <div style={{ color: c.color, marginBottom: '1rem' }}>{c.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>{c.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>{c.desc}</p>
                  {c.link !== '#' && (
                    <Link to={c.link} style={{ color: c.color, fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Explore <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
              Ready to Join the SPACE Family?
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Bring SPACE India to your school or enrich your child's passion for space science today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link to="/services" className="btn-outline">Our Programs</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
