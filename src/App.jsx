import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SpaceCanvas from './components/SpaceCanvas'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import SchoolPrograms from './pages/services/SchoolPrograms'
import SpaceAstronomyClub from './pages/services/SpaceAstronomyClub'
import SpaceExplorersWorkshop from './pages/services/SpaceExplorersWorkshop'
import UniverseInSchool from './pages/services/UniverseInSchool'
import SpaceInnovatorsClub from './pages/services/SpaceInnovatorsClub'
import SpaceMobilePlanetarium from './pages/services/SpaceMobilePlanetarium'
import OnlinePrograms from './pages/services/OnlinePrograms'
import AstronomyCamp from './pages/services/AstronomyCamp'
import IAstronomer from './pages/services/IAstronomer'
import Voyager from './pages/services/Voyager'
import LabObservatory from './pages/services/LabObservatory'
import CompetitionOlympiad from './pages/services/CompetitionOlympiad'
import TravelWithUs from './pages/services/TravelWithUs'
import Outreach from './pages/Outreach'
import CollaborationPartnership from './pages/outreach/CollaborationPartnership'
import MediaCenter from './pages/media/MediaCenter'
import Gallery from './pages/media/Gallery'
import Blog from './pages/media/Blog'
import BlogPost from './pages/media/BlogPost'
import SpaceCommunity from './pages/SpaceCommunity'
import SpaceAlumni from './pages/community/SpaceAlumni'
import SpaceCalendar from './pages/SpaceCalendar'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Disclaimer from './pages/legal/Disclaimer'
import TermsConditions from './pages/legal/TermsConditions'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#020818' }}>
      <SpaceCanvas />
      <div className="page-content">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/school-programs" element={<SchoolPrograms />} />
          <Route path="/services/school-programs/space-astronomy-club" element={<SpaceAstronomyClub />} />
          <Route path="/services/school-programs/space-explorers-workshop" element={<SpaceExplorersWorkshop />} />
          <Route path="/services/school-programs/universe-in-the-school" element={<UniverseInSchool />} />
          <Route path="/services/school-programs/space-innovators-club" element={<SpaceInnovatorsClub />} />
          <Route path="/services/school-programs/space-mobile-planetarium" element={<SpaceMobilePlanetarium />} />
          <Route path="/services/online-programs" element={<OnlinePrograms />} />
          <Route path="/services/online-programs/astronomy-camp" element={<AstronomyCamp />} />
          <Route path="/services/online-programs/iastronomer" element={<IAstronomer />} />
          <Route path="/services/online-programs/voyager" element={<Voyager />} />
          <Route path="/services/labs-observatory" element={<LabObservatory />} />
          <Route path="/services/labs-observatory/khagolshala-astronomy-space-science-lab" element={<LabObservatory />} />
          <Route path="/services/competition-and-olympiad" element={<CompetitionOlympiad />} />
          <Route path="/services/travel-with-us" element={<TravelWithUs />} />

          {/* Outreach */}
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/outreach/collaboration-partnership" element={<CollaborationPartnership />} />

          {/* Media */}
          <Route path="/media" element={<MediaCenter />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media/blog" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Community */}
          <Route path="/space-community" element={<SpaceCommunity />} />
          <Route path="/space-community/space-alumni" element={<SpaceAlumni />} />

          {/* Other */}
          <Route path="/space-calender" element={<SpaceCalendar />} />
          <Route path="/space-calendar" element={<SpaceCalendar />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App