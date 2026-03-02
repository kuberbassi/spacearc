import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase, ArrowRight } from 'lucide-react'
import PageHero from '../../components/PageHero'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} viewport={{ once: true }}>
    {children}
  </motion.div>
)

const placeholderAlumni = [
  { name: 'Aarav Sharma', batch: '2019', location: 'IIT Delhi', pursuit: 'Aerospace Engineering', program: 'Space Astronomy Club' },
  { name: 'Priya Nair', batch: '2020', location: 'ISRO, Bengaluru', pursuit: 'Satellite Communications', program: 'iAstronomer' },
  { name: 'Rohan Mehta', batch: '2018', location: 'Mumbai', pursuit: 'Astrophotography', program: 'Space Explorers Workshop' },
  { name: 'Sneha Pillai', batch: '2021', location: 'Delhi', pursuit: 'Science Communication', program: 'Universe In School' },
  { name: 'Kabir Joshi', batch: '2020', location: 'Pune', pursuit: 'Robotics & AI', program: 'Space Innovators Club' },
  { name: 'Ananya Rao', batch: '2022', location: 'Hyderabad', pursuit: 'Planetary Science (PhD)', program: 'Astronomy Camp' },
]

export default function SpaceAlumni() {
  return (
    <main>
      <PageHero
        label="Alumni Network"
        title="SPACE Alumni — Stars of Tomorrow"
        description="Our alumni carry the torch of space science education wherever they go. From IITs to ISRO, SPACE alumni are shaping India's future."
        breadcrumbs={[{ label: 'Space Community', path: '/space-community' }, { label: 'Space Alumni' }]}
      />

      {/* Intro */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="section-label">About the Alumni Program</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: '#f1f5f9', margin: '0.75rem 0 1.25rem' }}>
                A Lifelong Connection With the Cosmos
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                Once a SPACE student, always a SPACE student. Our alumni program keeps graduates connected with each other, with new students as mentors, and with the latest happenings in space science.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Alumni get access to exclusive events, networking opportunities, and the chance to give back by mentoring the next crop of space enthusiasts across India.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Connect With Us <ArrowRight size={16} />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass rounded-xl p-6">
                <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem' }}>Alumni Benefits</h3>
                {[
                  'Access to exclusive alumni events & star parties',
                  'Mentorship opportunities for current students',
                  'Priority access to advanced programs',
                  'Career guidance in STEM fields',
                  'Lifetime community membership',
                  'Certificate of recognition',
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2 mb-3">
                    <span style={{ color: '#f97316', marginTop: '2px' }}>✓</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{b}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Alumni grid */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="section-label">Featured Alumni</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#f1f5f9', marginTop: '0.75rem' }}>
                Meet Our Stars
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                (Placeholder data — real alumni profiles to be provided by SPACE India team)
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderAlumni.map((a, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-5 card-hover text-center">
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(124,58,237,0.3))', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={28} style={{ color: '#f97316' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.25rem' }}>{a.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-3" style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                    <MapPin size={11} /> {a.location}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2" style={{ color: '#f97316', fontSize: '0.8rem' }}>
                    <Briefcase size={11} /> {a.pursuit}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#8b5cf6', background: 'rgba(139,92,246,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>
                    {a.program} · Batch {a.batch}
                  </span>
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
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>Are You a SPACE Alumni?</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Register your profile and join India's most vibrant space science community.</p>
            <Link to="/contact" className="btn-primary">Register as Alumni</Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
