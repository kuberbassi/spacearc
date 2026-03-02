import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react'
import PageHero from '../../components/PageHero'
import siteData from '../../data/siteData'

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(siteData.blogs.map(b => b.category))]
  const filtered = filter === 'All' ? siteData.blogs : siteData.blogs.filter(b => b.category === filter)

  return (
    <main>
      <PageHero
        label="Blogs"
        title="Our Blogs"
        description="Articles, stories, and updates from the fascinating world of space science and SPACE India."
        breadcrumbs={[{ label: 'Media', path: '/media' }, { label: 'Blogs' }]}
      />
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    background: filter === cat ? '#f97316' : 'rgba(255,255,255,0.05)',
                    color: filter === cat ? '#fff' : '#94a3b8',
                    border: '1px solid',
                    borderColor: filter === cat ? '#f97316' : 'rgba(255,255,255,0.08)',
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, i) => (
              <FadeIn key={blog.slug} delay={i * 0.08}>
                <Link to={`/blog/${blog.slug}`} className="glass rounded-2xl overflow-hidden card-hover block h-full" style={{ textDecoration: 'none' }}>
                  <div style={{ height: 200, background: `linear-gradient(${135 + i * 15}deg, rgba(249,115,22,0.12), rgba(124,58,237,0.12))`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <BookOpen size={48} style={{ color: 'rgba(249,115,22,0.35)' }} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span style={{ fontSize: '0.7rem', background: 'rgba(249,115,22,0.15)', color: '#f97316', padding: '0.2rem 0.65rem', borderRadius: '999px', fontWeight: 600 }}>
                        {blog.category}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={10} /> {blog.readTime}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.45, marginBottom: '0.75rem' }}>{blog.title}</h3>
                    <p style={{ fontSize: '0.83rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.25rem' }}>{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: '0.72rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={10} /> {blog.date}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#f97316', fontWeight: 600 }}>Read More →</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: '#64748b' }}>No blogs found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
