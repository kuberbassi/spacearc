import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHero({ label, title, description, breadcrumbs = [] }) {
  return (
    <div style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(124,58,237,0.08) 100%)',
        pointerEvents: 'none'
      }} />
      {/* Horizontal line accent */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)'
      }} />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-6 text-xs text-slate-500 flex-wrap">
            <Link to="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
              <Home size={11} /> Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={10} />
                {b.path ? (
                  <Link to={b.path} className="hover:text-orange-400 transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-slate-400">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {label && <p className="section-label">{label}</p>}
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#f1f5f9',
            maxWidth: '700px',
            marginBottom: description ? '1.25rem' : 0
          }}
        >
          {title}
        </h1>
        {description && (
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '580px', lineHeight: 1.7 }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
