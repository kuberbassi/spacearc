import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import siteData from '../data/siteData'

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

export default function About() {
  return (
    <main>
      <PageHero
        label="About Us"
        title="Who We Are"
        description="Space Technology and Education Pvt. Ltd. — 25+ years of inspiring the next generation of space scientists and innovators."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* About SPACE */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="section-label">About SPACE</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                A Pioneer in Astronomy & Space Science Education
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                Space Technology and Education Pvt. Ltd., also recognized as SPACE India, is a pioneer organization with a legacy of 25 years in developing and popularizing Astronomy, Space Science, and STEM education and experiences at the Grassroots level (K-12) and beyond.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                As a registered Space Tutor of the Indian Space Research Organization (ISRO), SPACE India has been instrumental in creating an impact through science, and aligns with the United Nations' Sustainable Development Goals.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem' }}>
                SPACE India has inspired 1.5M+ Students and empowered 1,000+ Schools through a diverse range of products and services. SPACE India is the parent company of the SPACE Group of companies.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact-us" className="btn-primary">Contact Us <ArrowRight size={16} /></Link>
                <a href="https://spacearcade.in/product-category/telescopes/" target="_blank" rel="noopener noreferrer" className="btn-outline">Buy Telescope</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9', background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${siteData.heroHighlightVideo}?rel=0&modestbranding=1`}
                  title="About SPACE India"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 text-center card-hover">
                  <div className="stat-number">{s.number}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Our Purpose</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>Mission & Vision</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FadeIn>
              <div className="glass rounded-2xl p-8 h-full" style={{ borderLeft: '3px solid #f97316' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Target size={24} style={{ color: '#f97316' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>Our Mission</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>{siteData.mission}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="glass rounded-2xl p-8 h-full" style={{ borderLeft: '3px solid #8b5cf6' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Eye size={24} style={{ color: '#8b5cf6' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>Our Vision</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>{siteData.vision}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Leadership</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>Meet Our Leadership</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {siteData.leadership.map((l, i) => (
              <FadeIn key={l.name} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(124,58,237,0.3))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#f97316', flexShrink: 0 }}>
                      {l.name.split(' ').pop().charAt(0)}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f1f5f9' }}>{l.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#f97316', fontWeight: 600 }}>{l.role}</p>
                      <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{l.org}</p>
                    </div>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.75, fontStyle: 'italic' }}>"{l.message}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Institutions */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="section-label">Trusted By</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>
              Trusted By Leading Institutions
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center">
              {siteData.trustedInstitutions.map((inst) => (
                <div key={inst} className="glass rounded-full px-4 py-2 card-hover">
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{inst}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partners */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="section-label">Partners & Affiliations</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>
              Our Esteemed Partners
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap gap-4 justify-center">
              {siteData.partners.map((p) => (
                <div key={p} className="glass rounded-xl px-6 py-3 card-hover">
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#94a3b8' }}>{p}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Space Group */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="section-label">Our Family</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
              Explore Space Group
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              SPACE India is the parent company of the SPACE Group of companies — a family of organizations united by a passion for space science education.
            </p>
            <a href="https://space-global.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Visit SPACE Group Website <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
