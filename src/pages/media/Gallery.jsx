import { motion } from 'framer-motion'
import { Image } from 'lucide-react'
import PageHero from '../../components/PageHero'

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

// Placeholder gallery items - owner will provide real images
const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  category: ['Events', 'Workshops', 'Star Gazing', 'Competitions'][i % 4],
  aspectRatio: [1, 1.3, 0.8, 1][i % 4],
}))

export default function Gallery() {
  return (
    <main>
      <PageHero
        label="Photo Gallery"
        title="Photo Gallery"
        description="A visual journey through SPACE India's events, workshops, star-gazing sessions, and more."
        breadcrumbs={[{ label: 'Media', path: '/media' }, { label: 'Gallery' }]}
      />
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center" style={{ marginBottom: '2.5rem' }}>
              {['All', 'Events', 'Workshops', 'Star Gazing', 'Competitions'].map(cat => (
                <button
                  key={cat}
                  style={{
                    background: cat === 'All' ? '#f97316' : 'rgba(255,255,255,0.05)',
                    color: cat === 'All' ? '#fff' : '#94a3b8',
                    border: '1px solid',
                    borderColor: cat === 'All' ? '#f97316' : 'rgba(255,255,255,0.08)',
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Gallery grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {placeholders.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.04}>
                <div
                  className="glass rounded-xl overflow-hidden card-hover mb-4 break-inside-avoid"
                  style={{
                    aspectRatio: item.aspectRatio,
                    background: `linear-gradient(${135 + i * 20}deg, rgba(249,115,22,${0.05 + (i % 5) * 0.03}), rgba(124,58,237,${0.05 + (i % 3) * 0.04}))`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    cursor: 'pointer',
                    minHeight: '120px',
                  }}
                >
                  <Image size={28} style={{ color: 'rgba(249,115,22,0.3)', marginBottom: '0.5rem' }} />
                  <span style={{ fontSize: '0.72rem', color: '#475569' }}>{item.category}</span>
                  <span style={{ fontSize: '0.65rem', color: '#334155', marginTop: '0.25rem' }}>Image {item.id + 1}</span>
                  <p style={{ fontSize: '0.65rem', color: '#475569', marginTop: '0.5rem', textAlign: 'center' }}>Real photo coming soon</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-10">
              <a
                href="https://www.instagram.com/space_india"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                More on Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
