import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Facebook, Instagram, Twitter, Linkedin, Youtube,
  MapPin, Phone, Mail, ArrowRight, ExternalLink
} from 'lucide-react'

const usefulLinks = [
  { label: 'Home',          path: '/' },
  { label: 'About Us',     path: '/about-us' },
  { label: 'Services',     path: '/services' },
  { label: 'Outreach',     path: '/outreach' },
  { label: 'Space Alumni', path: '/space-community/space-alumni' },
  { label: 'Gallery',      path: '/gallery' },
  { label: 'Our Blogs',    path: '/blog' },
  { label: 'FAQs',         path: '/faq' },
  { label: 'Contact Us',   path: '/contact-us' },
]

const serviceLinks = [
  { label: 'Space Astronomy Club',    path: '/services/school-programs/space-astronomy-club' },
  { label: 'Space Explorers Workshop', path: '/services/school-programs/space-explorers-workshop' },
  { label: 'Universe in the School',  path: '/services/school-programs/universe-in-the-school' },
  { label: "Space Innovator's Club",  path: '/services/school-programs/space-innovators-club' },
  { label: 'Space Mobile Planetarium', path: '/services/school-programs/space-mobile-planetarium' },
  { label: 'Astronomy Camp',           path: '/services/online-programs/astronomy-camp' },
  { label: 'iAstronomer',              path: '/services/online-programs/iastronomer' },
  { label: 'Voyager',                  path: '/services/online-programs/voyager' },
  { label: 'Khagolshala (Space Lab)',  path: '/services/labs-observatory/khagolshala-astronomy-space-science-lab' },
  { label: 'Competition & Olympiad',   path: '/services/competition-and-olympiad' },
  { label: 'Travel With Us',           path: '/services/travel-with-us' },
]

const socials = [
  { Icon: Facebook,  href: 'https://www.facebook.com/SPACEIndiaEdu', label: 'Facebook' },
  { Icon: Instagram, href: 'https://www.instagram.com/space_india',  label: 'Instagram' },
  { Icon: Twitter,   href: 'https://twitter.com/spacian',            label: 'Twitter' },
  { Icon: Linkedin,  href: 'https://www.linkedin.com/company/space-technology-&-education-pvt-ltd', label: 'LinkedIn' },
  { Icon: Youtube,   href: 'https://www.youtube.com/user/SpaceinternetTV', label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thanks for subscribing to Galactica Magazine!')
    setEmail('')
  }

  return (
    <footer style={{ background: 'linear-gradient(180deg, #020818 0%, #050d24 100%)', borderTop: '1px solid rgba(249,115,22,0.1)' }}>
      {/* CTA Banner */}
      <div style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(124,58,237,0.1))', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '2.5rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold text-white mb-1">The Website ends here, but your journey to learn about Space is endless.</p>
            <p className="text-slate-400 text-sm">Start your journey now!</p>
          </div>
          <Link to="/services" className="btn-primary flex-shrink-0">
            View Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, #f97316, #7c3aed)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1rem', color: '#fff'
              }}>SI</div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f1f5f9', lineHeight: 1 }}>
                  SPACE<span style={{ color: '#f97316' }}>India</span>
                </div>
                <div style={{ fontSize: '0.55rem', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Space Technology & Education
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Pioneer organization with 25+ years in developing and popularizing Astronomy, Space Science, and STEM education at the grassroots level.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-orange-500/10 border border-orange-500/20 text-orange-400 px-2 py-1 rounded-full">🚀 ISRO Registered Space Tutor</span>
              <span className="text-xs bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2 py-1 rounded-full">ISO 9001:2015</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-orange-400 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2">
              {usefulLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Head Office, Delhi
            </h3>
            <div className="flex flex-col gap-4 mb-6">
              <p className="text-slate-400 text-sm flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-orange-500" />
                Space Technology and Education Pvt. Ltd., Plot No.3, Institutional Area (Ramleela Ground), Sector 11, Dwarka, New Delhi - 110075, India
              </p>
              <a href="tel:+917402074020" className="text-slate-400 hover:text-orange-400 text-sm flex items-center gap-2 transition-colors">
                <Phone size={14} className="text-orange-500" />
                +91-74020 74020
              </a>
              <a href="tel:+911145086320" className="text-slate-400 hover:text-orange-400 text-sm flex items-center gap-2 transition-colors">
                <Phone size={14} className="text-orange-500" />
                +91-11-45086320
              </a>
              <a href="mailto:getintouch@space-india.com" className="text-slate-400 hover:text-orange-400 text-sm flex items-center gap-2 transition-colors">
                <Mail size={14} className="text-orange-500" />
                getintouch@space-india.com
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-slate-300 mb-1">Subscribe for Galactica Magazine</p>
              <p className="text-xs text-slate-500 mb-3">Receive latest news about Space.</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-500"
                  style={{ outline: 'none' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 0' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center md:text-left">
            ISO 9001:2015 © 2001–2026 All Rights Reserved by SPACE India
          </p>
          <div className="flex items-center flex-wrap gap-4 justify-center">
            {[
              { label: 'Privacy Policy',    path: '/privacy-policy' },
              { label: 'Disclaimer',        path: '/disclaimer' },
              { label: 'Terms & Conditions', path: '/terms-and-conditions' },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-slate-500 hover:text-orange-400 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
            <a
              href="https://space-global.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-orange-400 text-xs transition-colors flex items-center gap-1"
            >
              Part of SPACE Group <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
