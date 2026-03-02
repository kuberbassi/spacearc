import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about-us',
  },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      {
        group: 'School Programs',
        items: [
          { label: 'Space Astronomy Club',      path: '/services/school-programs/space-astronomy-club' },
          { label: 'Space Explorers Workshop',   path: '/services/school-programs/space-explorers-workshop' },
          { label: 'Universe in the School',     path: '/services/school-programs/universe-in-the-school' },
          { label: "Space Innovator's Club",     path: '/services/school-programs/space-innovators-club' },
          { label: 'Space Mobile Planetarium',   path: '/services/school-programs/space-mobile-planetarium' },
        ],
      },
      {
        group: 'Online Programs',
        items: [
          { label: 'Astronomy Camp',  path: '/services/online-programs/astronomy-camp' },
          { label: 'iAstronomer',     path: '/services/online-programs/iastronomer' },
          { label: 'Voyager',         path: '/services/online-programs/voyager' },
        ],
      },
      {
        group: 'More',
        items: [
          { label: 'Lab & Observatory',          path: '/services/labs-observatory' },
          { label: 'Competition & Olympiad',     path: '/services/competition-and-olympiad' },
          { label: 'Travel With Us',             path: '/services/travel-with-us' },
        ],
      },
    ],
  },
  {
    label: 'Outreach',
    path: '/outreach',
    dropdown: [
      {
        group: '',
        items: [
          { label: 'Outreach Overview',          path: '/outreach' },
          { label: 'Collaboration & Partnership', path: '/outreach/collaboration-partnership' },
        ],
      },
    ],
  },
  {
    label: 'Media',
    path: '/media',
    dropdown: [
      {
        group: '',
        items: [
          { label: 'Media Center', path: '/media' },
          { label: 'Photo Gallery', path: '/gallery' },
          { label: 'Our Blogs',    path: '/blog' },
        ],
      },
    ],
  },
  {
    label: 'Space Community',
    path: '/space-community',
    dropdown: [
      {
        group: '',
        items: [
          { label: 'Space Alumni', path: '/space-community/space-alumni' },
        ],
      },
    ],
  },
  { label: 'Space Calendar', path: '/space-calender' },
  { label: 'Contact Us',    path: '/contact-us' },
]

function DropdownMenu({ groups, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="glass-dark absolute top-full left-0 mt-2 rounded-xl p-4 min-w-[520px] z-50"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}
    >
      <div className="flex gap-6">
        {groups.map((g) => (
          <div key={g.group} className="flex-1 min-w-[140px]">
            {g.group && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">{g.group}</p>
            )}
            {g.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="block text-slate-300 hover:text-orange-400 text-sm py-1.5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <>
      {/* Top bar */}
      <div style={{ background: '#0a1628', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <a
              href="https://space-global.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              SPACE Group <ExternalLink size={10} />
            </a>
            <a
              href="https://space-global.com/career/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              SPACE Career <ExternalLink size={10} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+917402074020" className="text-xs text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1">
              <Phone size={11} />
              +91-74020 74020
            </a>
            <a
              href="https://learn.space-india.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(2,8,24,0.95)' : 'rgba(2,8,24,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(249,115,22,0.15)' : '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f97316, #7c3aed)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                color: '#fff',
              }}
            >
              SI
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f1f5f9', lineHeight: 1 }}>
                SPACE<span style={{ color: '#f97316' }}>India</span>
              </div>
              <div style={{ fontSize: '0.55rem', color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Space Technology & Education
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-0.5 px-2.5 py-2 text-[13px] font-medium text-slate-300 hover:text-orange-400 transition-colors rounded-lg whitespace-nowrap"
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                  >
                    {item.label}
                    <ChevronDown size={12} className={`transition-transform flex-shrink-0 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-2.5 py-2 text-[13px] font-medium rounded-lg transition-colors whitespace-nowrap ${isActive ? 'text-orange-400' : 'text-slate-300 hover:text-orange-400'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <DropdownMenu
                      groups={item.dropdown}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href="https://spacearcade.in/product-category/telescopes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '0.4rem 1rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}
            >
              Buy Telescope
            </a>
            <Link to="/contact-us" className="btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-300 hover:text-orange-400 transition-colors"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', background: 'rgba(2,8,24,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors rounded-lg"
                          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                        >
                          {item.label}
                          <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="pl-4 pb-2">
                                {item.dropdown.flatMap((g) => g.items).map((sub) => (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    className="block px-3 py-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-orange-400' : 'text-slate-300 hover:text-orange-400'}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
                <div className="pt-3 flex flex-col gap-2 border-t border-white/10 mt-2">
                  <Link to="/contact-us" className="btn-primary" style={{ justifyContent: 'center' }}>Contact Us</Link>
                  <a
                    href="https://spacearcade.in/product-category/telescopes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ justifyContent: 'center' }}
                  >
                    Buy Telescope
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
