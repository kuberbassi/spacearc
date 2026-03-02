import { motion } from 'framer-motion'
import { Calendar, Star, Moon, Telescope } from 'lucide-react'
import PageHero from '../components/PageHero'
import siteData from '../data/siteData'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} viewport={{ once: true }}>
    {children}
  </motion.div>
)

const typeIcons = {
  'Astronomical': <Star size={16} />,
  'Eclipse': <Moon size={16} />,
  'Meteor Shower': <Star size={16} />,
  'Occultation': <Moon size={16} />,
  'Conjunction': <Telescope size={16} />,
}

const typeColors = {
  'Astronomical': '#f97316',
  'Eclipse': '#8b5cf6',
  'Meteor Shower': '#06b6d4',
  'Occultation': '#f59e0b',
  'Conjunction': '#10b981',
}

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']

// Group by month from YYYY-MM-DD format
function groupByMonth(events) {
  return events.reduce((acc, ev) => {
    const [year, month] = ev.date.split('-')
    const key = `${monthNames[parseInt(month, 10) - 1]} ${year}`
    if (!acc[key]) acc[key] = []
    acc[key].push(ev)
    return acc
  }, {})
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function SpaceCalendar() {
  const grouped = groupByMonth(siteData.calendarEvents)

  return (
    <main>
      <PageHero
        label="Astronomical Events"
        title="Space Calendar 2026"
        description="Never miss a celestial spectacle. From meteor showers to eclipses, plan your sky-watching sessions with SPACE India's astronomy calendar."
        breadcrumbs={[{ label: 'Space Calendar' }]}
      />

      {/* Legend */}
      <section style={{ padding: '2rem 0', background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {Object.entries(typeColors).map(([type, color]) => (
              <span key={type} className="flex items-center gap-2" style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' }} />
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Events by month */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          {Object.entries(grouped).map(([month, events], gi) => (
            <FadeIn key={month} delay={gi * 0.1}>
              <div style={{ marginBottom: '3rem' }}>
                <h2 className="flex items-center gap-3" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f97316', marginBottom: '1rem' }}>
                  <Calendar size={20} /> {month}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {events.map((ev, i) => {
                    const color = typeColors[ev.type] || '#94a3b8'
                    return (
                      <div key={i} className="glass rounded-xl p-5 card-hover" style={{ borderLeft: `3px solid ${color}` }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span style={{ color }}>{typeIcons[ev.type] || <Star size={16} />}</span>
                          <span style={{ fontSize: '0.7rem', color, fontWeight: 600, background: `${color}18`, padding: '0.15rem 0.5rem', borderRadius: '999px' }}>
                            {ev.type}
                          </span>
                        </div>
                        <h3 style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{ev.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem', lineHeight: 1.5 }}>{ev.description}</p>
                        <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{formatDate(ev.date)}</p>
                        {ev.visibility && (
                          <p style={{ fontSize: '0.7rem', color: '#10b981', marginTop: '0.25rem' }}>Visibility: {ev.visibility}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Observe with SPACE CTA */}
      <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <Telescope size={48} style={{ color: '#f97316', margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
              Observe These Events With SPACE India
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
              Join our star parties, observation camps, and live-stream events to experience these celestial wonders with expert guidance.
            </p>
            <a href="/contact" className="btn-primary">Plan an Observation Event</a>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
