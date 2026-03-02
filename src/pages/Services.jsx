import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Telescope, Globe, BookOpen, Rocket, Zap, Star, FlaskConical, Trophy, Plane, ChevronRight } from 'lucide-react'
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

const categories = [
  {
    id: 'school',
    label: 'School Programs',
    icon: BookOpen,
    color: '#f97316',
    desc: 'Curriculum-aligned, school-based programs in Astronomy, Space Science & STEM for K-12 students.',
    programs: siteData.services.schoolPrograms,
  },
  {
    id: 'online',
    label: 'Online Programs',
    icon: Zap,
    color: '#8b5cf6',
    desc: 'Live and self-paced online programs accessible from anywhere in India and globally.',
    programs: siteData.services.onlinePrograms,
  },
]

const otherServices = [
  {
    icon: FlaskConical,
    title: 'Lab & Observatory',
    subtitle: 'Khagolshala – Astronomy & Space Science Lab',
    desc: 'Transform your school space into a world-class astronomy learning center with professional-grade equipment.',
    path: '/services/labs-observatory',
    color: '#06b6d4',
  },
  {
    icon: Trophy,
    title: 'Competition & Olympiad',
    subtitle: 'National & International Competitions',
    desc: 'Facilitate participation in national and international astronomy competitions and olympiads.',
    path: '/services/competition-and-olympiad',
    color: '#f59e0b',
  },
  {
    icon: Plane,
    title: 'Travel With Us',
    subtitle: 'Astronomy Education Tours',
    desc: 'Curated astronomy-themed educational tours to iconic space science destinations across India and internationally.',
    path: '/services/travel-with-us',
    color: '#10b981',
  },
]

export default function Services() {
  return (
    <main>
      <PageHero
        label="Services"
        title="Our Programs & Services"
        description="SPACE India is a one-stop solution for Astronomy, Space Science and STEM education. Our programs are open for all — individuals, students, and institutions."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services intro */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="glass rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Space Technology and Education Pvt. Ltd. offers a range of meticulously curated educational programs in Astronomy, Space Science, and STEM to promote the development of 21st-century skills in students. Our programs complement the National Education Policy (NEP) 2020.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* School Programs */}
      {categories.map((cat, ci) => {
        const Icon = cat.icon
        return (
          <section key={cat.id} className="section-py" style={ci % 2 === 1 ? { background: 'rgba(10,22,40,0.5)' } : {}}>
            <div className="max-w-7xl mx-auto px-4">
              <FadeIn className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${cat.color}18`, border: `1px solid ${cat.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} style={{ color: cat.color }} />
                  </div>
                  <p className="section-label" style={{ marginBottom: 0 }}>{cat.label}</p>
                </div>
                <p style={{ color: '#94a3b8', maxWidth: '600px' }}>{cat.desc}</p>
              </FadeIn>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.programs.map((prog, i) => (
                  <FadeIn key={prog.id} delay={i * 0.08}>
                    <Link
                      to={prog.path}
                      className="glass rounded-2xl p-6 card-hover block h-full"
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${prog.color}18`, border: `1px solid ${prog.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Telescope size={22} style={{ color: prog.color }} />
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>{prog.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1rem' }}>{prog.shortDesc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.05)', color: '#64748b', padding: '0.2rem 0.6rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.06)' }}>
                          {prog.ageGroup}
                        </span>
                        <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.05)', color: '#64748b', padding: '0.2rem 0.6rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.06)' }}>
                          {prog.mode}
                        </span>
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
        )
      })}

      {/* Other Services */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="mb-10">
            <p className="section-label">More Services</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#f1f5f9' }}>
              Additional Offerings
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s, i) => {
              const Icon = s.icon
              return (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <Link to={s.path} className="glass rounded-2xl p-7 card-hover block" style={{ textDecoration: 'none' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={26} style={{ color: s.color }} />
                    </div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: s.color, marginBottom: '0.5rem' }}>{s.title}</p>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem', lineHeight: 1.3 }}>{s.subtitle}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1rem' }}>{s.desc}</p>
                    <span style={{ fontSize: '0.8rem', color: s.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Learn More <ChevronRight size={14} />
                    </span>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
              Ready to Bring Space Science to Your School?
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.7 }}>
              Connect with our team today and we'll help design the perfect program for your students.
            </p>
            <Link to="/contact-us" className="btn-primary">
              Get In Touch <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
