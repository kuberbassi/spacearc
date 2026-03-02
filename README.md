# 🚀 SPACE India — Official Website

> Inspiring the Next Generation of Space Scientists

A modern, fully responsive **React SPA** for [SPACE India](https://space-india.com/) — India's pioneer in Astronomy, Space Science & STEM education for K-12 students. Built with React + Vite, Three.js 3D animations, and Tailwind CSS v4.

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-r170-black?logo=threedotjs)](https://threejs.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://spacearc-one.vercel.app)

---

## ✨ Features

- **30+ Pages** — Home, About, all Service sub-pages, Outreach, Media, Gallery, Blog, Community, Calendar, Contact, FAQ, Legal pages
- **Three.js Space Background** — Animated starfield, nebula particles, orbiting ring, floating planet & rocket
- **Mega Dropdown Navbar** — Sticky with glassmorphism scroll effect, full mobile accordion
- **Framer Motion Animations** — Scroll-triggered fade-ins, staggered cards, animated dropdowns
- **Swiper Carousel** — Testimonials with autoplay and pagination
- **Contact Form** — EmailJS-ready, no backend required
- **Space Calendar** — 2026 astronomical events grouped by month with type badges
- **Dark Space Theme** — Glassmorphism cards, orange/purple gradients, custom scrollbar

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + Vite 7 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| 3D | Three.js + `@react-three/fiber` + `@react-three/drei` |
| Animation | Framer Motion + GSAP |
| Icons | Lucide React |
| Carousel | Swiper.js |
| Contact | `@emailjs/browser` |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx            # Sticky navbar with mega-dropdowns & mobile menu
│   ├── Footer.jsx            # Full footer with newsletter subscribe
│   ├── SpaceCanvas.jsx       # Three.js animated space background
│   ├── PageHero.jsx          # Reusable page hero with breadcrumbs
│   └── ServiceDetailPage.jsx # Reusable service detail layout
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Outreach.jsx
│   ├── SpaceCommunity.jsx
│   ├── SpaceCalendar.jsx
│   ├── ContactUs.jsx
│   ├── FAQ.jsx
│   ├── NotFound.jsx
│   ├── services/             # 11 service sub-pages
│   ├── media/                # MediaCenter, Gallery, Blog, BlogPost
│   ├── outreach/             # CollaborationPartnership
│   ├── community/            # SpaceAlumni
│   └── legal/                # PrivacyPolicy, Disclaimer, Terms
├── data/
│   └── siteData.js           # Central data store — replace with real content
└── index.css                 # Global styles + Tailwind + custom utilities
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
git clone https://github.com/kuberbassi/spacearc.git
cd spacearc
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deploy to Vercel

### Via Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import `kuberbassi/spacearc` from GitHub
3. Vercel auto-detects Vite — click **Deploy**

The included `vercel.json` handles:
- SPA routing (all paths → `index.html`)
- Long-term asset caching (`Cache-Control: immutable`)
- Security headers (X-Frame-Options, XSS-Protection)

### Via CLI
```bash
npm i -g vercel
vercel --prod
```

---

## 🔧 Customisation

### Replace Placeholder Data
All content is in `src/data/siteData.js`:

| Key | What to update |
|---|---|
| `company` | Phone, email, address |
| `leadership[]` | Names, roles, photos, messages |
| `mentors[]` | Mentor names & organisations |
| `stats[]` | Impact numbers |
| `blogs[]` | Blog slugs, titles, excerpts |
| `calendarEvents[]` | Astronomical events |
| `heroHighlightVideo` | YouTube video ID for About page |

### Wire Up EmailJS (Contact Form)
In `src/pages/ContactUs.jsx`, replace the `handleSubmit` placeholder:

```js
import emailjs from '@emailjs/browser'

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name: form.name, email: form.email, message: form.message },
  'YOUR_PUBLIC_KEY'
)
```

### Add YouTube Videos
In `siteData.js`, add YouTube video IDs:
```js
heroVideos: [
  { id: 'YOUR_VIDEO_ID', title: 'Program Highlights' },
],
heroHighlightVideo: 'YOUR_VIDEO_ID',
```

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">
  <strong>Space Technology & Education Pvt. Ltd.</strong><br/>
  Plot No.3, Institutional Area, Sector 11, Dwarka, New Delhi — 110075<br/>
  <a href="https://space-india.com">space-india.com</a>
</div>
