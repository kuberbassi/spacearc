import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import siteData from '../data/siteData'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} viewport={{ once: true }}>
    {children}
  </motion.div>
)

const initialForm = { name: '', email: '', phone: '', subject: '', message: '', whatsapp: false }

export default function ContactUs() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // TODO: integrate EmailJS with real service/template IDs
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
    setForm(initialForm)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    color: '#f1f5f9',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }
  const labelStyle = { fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }

  return (
    <main>
      <PageHero
        label="Get In Touch"
        title="Aim for the Moon"
        description="Have a question, want to collaborate, or bring SPACE India to your school? We'd love to hear from you."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="glass rounded-2xl p-8">
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1.5rem' }}>Send Us a Message</h2>
                  {sent ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>Message Sent!</h3>
                      <p style={{ color: '#94a3b8' }}>Thank you for reaching out. We'll get back to you within 24–48 hours.</p>
                      <button onClick={() => setSent(false)} className="btn-outline" style={{ marginTop: '1.5rem' }}>Send Another</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Subject</label>
                        <input name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" style={inputStyle} />
                      </div>
                      <div className="sm:col-span-2">
                        <label style={labelStyle}>Message *</label>
                        <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your requirements..." style={{ ...inputStyle, resize: 'vertical' }} />
                      </div>
                      <div className="sm:col-span-2 flex items-center gap-3">
                        <input type="checkbox" id="whatsapp" name="whatsapp" checked={form.whatsapp} onChange={handleChange} style={{ width: 16, height: 16, accentColor: '#f97316' }} />
                        <label htmlFor="whatsapp" style={{ fontSize: '0.85rem', color: '#94a3b8', cursor: 'pointer' }}>
                          I consent to be contacted via WhatsApp for updates and further communication.
                        </label>
                      </div>
                      <div className="sm:col-span-2">
                        <button type="submit" disabled={loading} className="btn-primary flex items-center gap-2">
                          {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div>
              <FadeIn delay={0.2}>
                {/* Office info */}
                <div className="glass rounded-xl p-6 mb-6">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem' }}>Head Office</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={18} style={{ color: '#f97316', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>{siteData.company.address}</p>
                      {siteData.company.mapLink && (
                        <a href={siteData.company.mapLink} target="_blank" rel="noreferrer" style={{ color: '#f97316', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
                          Get Directions <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                  {[siteData.company.phone1, siteData.company.phone2].filter(Boolean).map((phone, i) => (
                    <div key={i} className="flex items-center gap-3 mb-3">
                      <Phone size={16} style={{ color: '#f97316', flexShrink: 0 }} />
                      <a href={`tel:${phone.replace(/[\s-]/g, '')}`} style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{phone}</a>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <Mail size={16} style={{ color: '#f97316', flexShrink: 0 }} />
                    <a href={`mailto:${siteData.company.email}`} style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{siteData.company.email}</a>
                  </div>
                </div>

                {/* Space Arcade */}
                <div className="glass rounded-xl p-6 mb-6">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>Space Arcade Showroom</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>
                    Visit our Space Arcade showroom to experience our telescopes, space merchandise, and educational kits in person.
                  </p>
                </div>

                {/* Hours */}
                <div className="glass rounded-xl p-6">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>Office Hours</h3>
                  {[['Monday – Friday', '9:00 AM – 6:00 PM'], ['Saturday', '10:00 AM – 4:00 PM'], ['Sunday', 'Closed']].map(([d, t]) => (
                    <div key={d} className="flex justify-between mb-2">
                      <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{d}</span>
                      <span style={{ fontSize: '0.82rem', color: '#f97316', fontWeight: 600 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
