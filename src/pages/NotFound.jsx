import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 560 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Animated astronaut / 404 */}
          <div style={{ fontSize: '7rem', lineHeight: 1, marginBottom: '1rem', animation: 'float 4s ease-in-out infinite' }}>
            🚀
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 'clamp(5rem, 15vw, 9rem)', fontWeight: 900, lineHeight: 1, background: 'linear-gradient(135deg, #f97316, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}
          >
            Lost in Space
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}
          >
            Houston, we have a problem. The page you're looking for has drifted beyond our telescope's range. Let's navigate you back to known space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/" className="btn-primary flex items-center gap-2">
              <Home size={16} /> Back to Home
            </Link>
            <Link to="/services" className="btn-outline flex items-center gap-2">
              <Search size={16} /> Explore Programs
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ marginTop: '3rem' }}
          >
            <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Quick Links</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Blog', to: '/blog' },
                { label: 'FAQ', to: '/faq' },
              ].map(l => (
                <Link key={l.to} to={l.to} style={{ fontSize: '0.82rem', color: '#94a3b8', padding: '0.3rem 0.75rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.08)', transition: 'color 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
