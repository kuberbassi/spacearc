import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react'
import siteData from '../../data/siteData'

export default function BlogPost() {
  const { slug } = useParams()
  const blog = siteData.blogs.find(b => b.slug === slug)
  const related = siteData.blogs.filter(b => b.slug !== slug).slice(0, 2)

  if (!blog) {
    return (
      <main className="section-py">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 style={{ color: '#f1f5f9', fontSize: '2rem', marginBottom: '1rem' }}>Blog Post Not Found</h1>
          <Link to="/blog" className="btn-primary">← Back to Blogs</Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Header */}
      <div style={{ padding: '3rem 0', background: 'rgba(10,22,40,0.5)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/blog" className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Blogs
          </Link>
          <span style={{ fontSize: '0.75rem', background: 'rgba(249,115,22,0.15)', color: '#f97316', padding: '0.25rem 0.75rem', borderRadius: '999px', fontWeight: 600 }}>
            {blog.category}
          </span>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#f1f5f9', lineHeight: 1.2, marginTop: '1rem', marginBottom: '1rem' }}>
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={13} /> {blog.date}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Cover image placeholder */}
      <div style={{ height: 300, background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(124,58,237,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <BookOpen size={64} style={{ color: 'rgba(249,115,22,0.25)' }} />
      </div>

      {/* Article content */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.9, marginBottom: '1.5rem', fontStyle: 'italic' }}>
              {blog.excerpt}
            </p>
            <div style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '1rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                This is a placeholder for the full blog post content. The real article content will be provided by the SPACE India team and integrated into the data store. Each blog post will contain the full article text, images, and multimedia content as provided by the owner.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Space Technology and Education Pvt. Ltd. regularly publishes articles on astronomy, space science, educational programs, and event recaps. Our blog is a window into the vibrant world of space science education in India.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Stay tuned for the complete article. In the meantime, explore our other programs and services to discover how SPACE India can bring the universe to your school.
              </p>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {['Space Science', 'Education', blog.category, 'SPACE India'].map(tag => (
              <span key={tag} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', color: '#64748b', padding: '0.25rem 0.75rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.06)' }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-py" style={{ background: 'rgba(10,22,40,0.5)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '2rem' }}>Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map(b => (
                <Link key={b.slug} to={`/blog/${b.slug}`} className="glass rounded-xl p-5 card-hover block" style={{ textDecoration: 'none' }}>
                  <span style={{ fontSize: '0.7rem', color: '#f97316', fontWeight: 600 }}>{b.category}</span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', margin: '0.5rem 0' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{b.excerpt}</p>
                  <span style={{ fontSize: '0.78rem', color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.75rem' }}>
                    Read More <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
