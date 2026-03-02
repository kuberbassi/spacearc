import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Star, Globe, BookOpen, Telescope, Rocket, Zap,
  ChevronRight, Play, Users, Award, CheckCircle, Quote
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import siteData from '../data/siteData'

// Animated counter
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const num = parseInt(target.replace(/[^0-9]/g, ''))
          let current = 0
          const step = Math.ceil(num / 60)
          const timer = setInterval(() => {
            current = Math.min(current + step, num)
            setCount(current)
            if (current >= num) clearInterval(timer)
          }, 30)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const serviceHighlights = [
  {
    icon: Telescope,
    title: 'Space Astronomy Club',
    desc: 'Regular club sessions teaching life skills through astronomy & space science.',
    path: '/services/school-programs/space-astronomy-club',
    color: '#f97316',
  },
  {
    icon: Globe,
    title: 'Space Mobile Planetarium',
    desc: 'An immersive full-dome experience bringing the universe to your school.',
    path: '/services/school-programs/space-mobile-planetarium',
    color: '#8b5cf6',
  },
  {
    icon: BookOpen,
    title: 'Universe in the School',
    desc: 'Interdisciplinary astronomy integrated into school curriculum.',
    path: '/services/school-programs/universe-in-the-school',
    color: '#06b6d4',
  },
  {
    icon: Rocket,
    title: "Space Innovator's Club",
    desc: 'Robotics, Drones, AI & IoT inspired by real space missions.',
    path: '/services/school-programs/space-innovators-club',
    color: '#10b981',
  },
  {
    icon: Star,
    title: 'Astronomy Camp',
    desc: 'Immersive online summer/winter camp for young space enthusiasts.',
    path: '/services/online-programs/astronomy-camp',
    color: '#f59e0b',
  },
  {
    icon: Zap,
    title: 'iAstronomer',
    desc: 'Structured online certification course in astronomy.',
    path: '/services/online-programs/iastronomer',
    color: '#ec4899',
  },
]

const partners = [
  'ISRO', 'ESA', 'IAU', 'IIRS', 'IIT Bombay', 'American Center', 'IASC', 'Globe at Night'
]

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

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ background: 'rgba(249,115,22,0.15)', color: '#f97316', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid rgba(249,115,22,0.3)' }}>
                    🚀 ISRO Registered Space Tutor
                  </span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  Inspiring the{' '}
                  <span className="text-gradient">Next Generation</span>
                  {' '}of Space Scientists
                </h1>
                <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' }}>
                  SPACE India — 25+ years of pioneering Astronomy, Space Science & STEM education at the grassroots level. Inspiring 1.5M+ students across 1000+ schools in 100+ cities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/services" className="btn-primary">
                    Explore Programs <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact-us" className="btn-outline">
                    Partner With Us
                  </Link>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {[
                    { label: 'Students Inspired', value: '1.5M+' },
                    { label: 'Schools Empowered', value: '1000+' },
                    { label: 'Cities Reached', value: '100+' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, background: 'linear-gradient(135deg, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Feature cards — 2-col grid, right column offset down */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex gap-4"
            >
              {/* Left column: cards 0 & 2 */}
              <div className="flex flex-col gap-4 flex-1">
                {[serviceHighlights[0], serviceHighlights[2]].map((s) => {
                  const Icon = s.icon
                  return (
                    <Link key={s.title} to={s.path} className="glass card-hover rounded-2xl p-5" style={{ textDecoration: 'none' }}>
                      <div style={{ width: 42, height: 42, borderRadius: 12, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.85rem' }}>
                        <Icon size={22} style={{ color: s.color }} />
                      </div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.4rem' }}>{s.title}</p>
                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.6 }}>{s.desc}</p>
                    </Link>
                  )
                })}
              </div>
              {/* Right column: cards 1 & 3, shifted down */}
              <div className="flex flex-col gap-4 flex-1" style={{ marginTop: '2.5rem' }}>
                {[serviceHighlights[1], serviceHighlights[3]].map((s) => {
                  const Icon = s.icon
                  return (
                    <Link key={s.title} to={s.path} className="glass card-hover rounded-2xl p-5" style={{ textDecoration: 'none' }}>
                      <div style={{ width: 42, height: 42, borderRadius: 12, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.85rem' }}>
                        <Icon size={22} style={{ color: s.color }} />
                      </div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.4rem' }}>{s.title}</p>
                      <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.6 }}>{s.desc}</p>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="section-label">About Us</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem', color: '#f1f5f9' }}>
                25 Years of Making Space Science Accessible
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                Space Technology and Education Pvt. Ltd., also recognized as SPACE India, is a pioneer organization with a legacy of 25 years in developing and popularizing Astronomy, Space Science, and STEM education at the Grassroots level (K-12) and beyond.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem' }}>
                As a registered Space Tutor of ISRO, SPACE India has been instrumental in creating an impact through science, and aligns with the United Nations' Sustainable Development Goals.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about-us" className="btn-primary">Learn More <ArrowRight size={16} /></Link>
                <Link to="/contact-us" className="btn-outline">Contact Us</Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {siteData.stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-6 text-center card-hover">
                    <div className="stat-number">{stat.number}</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="section-label">What We Offer</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
              Our Programs & Services
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              SPACE India is a one-stop solution for Astronomy, Space Science and STEM-related Education. Our programs complement NEP 2020 and are open for individuals and institutions alike.
            </p>
          </FadeIn>

          {/* Service category tabs visual */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceHighlights.map((s, i) => {
              const Icon = s.icon
              return (
                <FadeIn key={s.title} delay={i * 0.08}>
                  <Link
                    to={s.path}
                    className="glass rounded-2xl p-6 card-hover block"
                    style={{ textDecoration: 'none', height: '100%' }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={24} style={{ color: s.color }} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1rem' }}>{s.desc}</p>
                    <span style={{ fontSize: '0.8rem', color: s.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Learn More <ChevronRight size={14} />
                    </span>
                  </Link>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Programs <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="section-label">Media Center</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
              Explore Our Space
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>
              Take a spacewalk and explore cool and important things happening in Space with SPACE India.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9', maxWidth: '900px', margin: '0 auto', background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${siteData.heroHighlightVideo}?rel=0&modestbranding=1`}
                title="SPACE India Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MENTORS SECTION */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Mentors</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>
              Meet Our Mentors
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteData.mentors.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.06}>
                <div className="glass rounded-xl p-5 card-hover text-center">
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(124,58,237,0.3))', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', fontWeight: 700, color: '#f97316' }}>
                    {m.name.charAt(0)}
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9', marginBottom: '0.25rem' }}>{m.name}</p>
                  <p style={{ fontSize: '0.75rem', color: '#f97316', marginBottom: '0.25rem' }}>{m.title}</p>
                  <p style={{ fontSize: '0.72rem', color: '#64748b', lineHeight: 1.4 }}>{m.organization}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="section-label">Our Partners & Affiliations</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#f1f5f9' }}>
              Our Esteemed Partners & Affiliations
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.map((p) => (
                <div key={p} className="glass rounded-xl px-6 py-3 card-hover">
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#94a3b8' }}>{p}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="section-label">Testimonials</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>
              What People Say About Us
            </h2>
          </FadeIn>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            style={{ paddingBottom: '2.5rem' }}
          >
            {siteData.testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="glass rounded-2xl p-6" style={{ height: '100%', minHeight: '180px' }}>
                  <Quote size={24} style={{ color: '#f97316', opacity: 0.6, marginBottom: '1rem' }} />
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#f97316', fontSize: '0.9rem', flexShrink: 0 }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f1f5f9' }}>{t.name}</p>
                      <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{t.school}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="section-label">Blogs</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>Our Blogs</h2>
            </div>
            <Link to="/blog" className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
              View More <ArrowRight size={14} />
            </Link>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {siteData.blogs.map((b, i) => (
              <FadeIn key={b.slug} delay={i * 0.1}>
                <Link to={`/blog/${b.slug}`} className="glass rounded-2xl overflow-hidden card-hover block" style={{ textDecoration: 'none' }}>
                  <div style={{ height: 180, background: `linear-gradient(135deg, rgba(249,115,22,0.15), rgba(124,58,237,0.15))`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <BookOpen size={48} style={{ color: 'rgba(249,115,22,0.4)' }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontSize: '0.7rem', background: 'rgba(249,115,22,0.15)', color: '#f97316', padding: '0.15rem 0.6rem', borderRadius: '999px' }}>{b.category}</span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{b.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.45, marginBottom: '0.5rem' }}>{b.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>{b.excerpt}</p>
                    <p style={{ fontSize: '0.72rem', color: '#475569', marginTop: '1rem' }}>{b.date}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="section-label">FAQ</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9' }}>
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {siteData.faqs.slice(0, 3).map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <FAQItem faq={faq} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-8">
            <Link to="/faq" className="btn-outline">
              View All FAQs <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass rounded-xl" style={{ overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left p-5"
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#f1f5f9' }}
      >
        <span style={{ fontWeight: 600, fontSize: '0.95rem', paddingRight: '1rem' }}>Q. {faq.question}</span>
        <ChevronRight size={18} style={{ flexShrink: 0, color: '#f97316', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {open && (
        <div style={{ padding: '0 1.25rem 1.25rem', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ paddingTop: '1rem' }}>{faq.answer}</div>
        </div>
      )}
    </div>
  )
}
