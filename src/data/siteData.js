// Central data store for SPACE India website
// Real data to be replaced by owner

export const siteData = {
  // Company info
  company: {
    name: 'Space Technology and Education Pvt. Ltd.',
    shortName: 'SPACE India',
    tagline: "India's Pioneer in Astronomy & Space Science Education",
    founded: '2001',
    legacy: '25+ years',
    phone1: '+91-74020 74020',
    phone2: '+91-11-45086320',
    phoneOnline: '+91-9599811025',
    email: 'getintouch@space-india.com',
    address: 'Plot No.3, Institutional Area (Ramleela Ground), Sector 11, Dwarka, New Delhi - 110075, India',
    mapLink: 'https://goo.gl/maps/kTLw5zjxaz2LCEvD7',
    isroRegistered: true,
    iso: 'ISO 9001:2015',
  },

  // Stats
  stats: [
    { number: '400+', label: 'Activities Developed' },
    { number: '1000+', label: 'Schools Associated' },
    { number: '1.5M+', label: 'Students Engaged' },
    { number: '100+', label: 'Cities Presence' },
  ],

  // Hero slides (YouTube video IDs from the channel owner)
  heroVideos: [
    // Add private YouTube video IDs here when provided by owner
    // { id: 'VIDEO_ID_1', title: 'Slide Title 1' },
  ],
  heroHighlightVideo: 'dgdtCc8Xgos', // Used on About page - replace when private link provided

  // Mentors
  mentors: [
    { name: 'Dr. Rajesh Hasija',     title: 'Director',           organization: 'Indraprastha Group Of Schools' },
    { name: 'Mrs. Meenu Goswami',    title: 'Principal',          organization: 'Bal Bharati Public School, Pitampura' },
    { name: 'Mr. Laksh Vir Sehgal', title: 'Principal',          organization: 'Bal Bharati Public School, Ganga Ram Hospital Marg' },
    { name: 'Mr. AP Sharma',         title: 'Director Principal', organization: 'Kundan Vidya Mandir School, Ludhiana' },
    { name: 'Ms. Madhulika Sen',     title: 'Sr. Education Advisor', organization: 'Tagore International School, Vasant Vihar' },
    { name: 'Mr. Anil Kumar',        title: 'Principal',          organization: 'DPS School, Faridabad' },
    { name: 'Gunmeet Bindra',        title: 'Principal',          organization: 'Daly College, Indore' },
    { name: 'Dr. Bindu Sharma',      title: 'Principal',          organization: 'Delhi Public School, Greater Faridabad' },
  ],

  // Leadership
  leadership: [
    {
      name: 'Dr. Sachin Bahmba',
      role: 'Founder',
      org: 'Space Technology & Education Pvt. Ltd.',
      message: "Space and Astronomy is the future for the young generation of our country. This is a great means to inculcate scientific temperament among the masses. Such astronomy sessions will provide a hands-on learning platform to students wherein they explore the real world of science. I wish for the young students to let their ambitions soar and think big as they are the future of our country.",
      image: null,
    },
    {
      name: 'Ms. Shalini Bahmba',
      role: 'Co-Founder & Director, Capacity Building',
      org: 'Space Technology & Education Pvt. Ltd.',
      message: "With a visionary mindset and a drive for success, Shalini is a dynamic force behind the growth and success of Space group. As a co-founder, she has played a pivotal role in developing innovative products that have shaped the Astronomy and space science educational landscape.",
      image: null,
    },
    {
      name: 'Mr. Shivam Gupta',
      role: 'Managing Director',
      org: 'Space Technology & Education Pvt. Ltd.',
      message: "Education in any part of life is integral & to be involved in grassroots journey fills our purpose at Space while doing it with sustainable measures. We are transforming Indian institutions to provide better learning opportunities through Experiential and Hands-On Learning by imparting education in the niche and important field of Astronomy and Space Science.",
      image: null,
    },
    {
      name: 'Mr. Mitul Jain',
      role: 'Managing Director',
      org: 'Space Technology & Education Pvt. Ltd.',
      message: "Powered by legal acumen and business foresight, Mr. Jain seeks to position the company in global space and astronomy education arena and further envisions pioneering endeavors that tap into India's potential as a spacefaring nation.",
      image: null,
    },
  ],

  // Mission & Vision
  mission: "To inculcate Scientific Temperament, Build Capacity and make Astronomy & Space Science Education & Experiences easily accessible to every Human on Earth.",
  vision: "To popularize hands-on science, astronomy and space science through fun-filled pioneering concepts, services and programs.",

  // Trusted institutions (subset)
  trustedInstitutions: [
    'American Public School', 'Ryan Group', 'APS Delhi Cantt', 'The Presidium School',
    'ASN Sr. Sec. School', 'Bal Bharati Public School', 'Manav Rachna International School',
    'Billabong High School Noida', 'Blue Bells Public School', 'Capstone High School Bangalore',
    'Chennai Public School', 'Chinmaya Vidyalaya School', 'DAV Public School', 'Delhi Public School Faridabad',
  ],

  // Partners & Affiliations
  partners: [
    'American Center, New Delhi', 'ESA (European Space Agency)', 'Global Astronomy Month (GAM)',
    'Globe at Night', 'IASC', 'IAU (International Astronomical Union)', 'IIRS',
    'IIT Bombay', 'Indian Science Congress Association', 'ISRO',
  ],

  // Services
  services: {
    schoolPrograms: [
      {
        id: 'space-astronomy-club',
        title: 'Space Astronomy Club',
        path: '/services/school-programs/space-astronomy-club',
        shortDesc: 'SPACE Astronomy Club aims to teach the students life skills through intelligent application of astronomy & space science.',
        description: `SPACE Astronomy Club is a comprehensive school-based program designed to immerse students in the fascinating world of astronomy and space science. The club meets regularly and provides students with hands-on experiences including telescope observation sessions, planetarium visits (virtual and physical), and systematic sky-watching activities.

Through this program, students develop critical thinking, problem-solving, and scientific temperament while exploring constellations, planets, moons, and deep sky objects. The curriculum aligns with NEP 2020 and is tailored to different age groups (K-12).`,
        features: ['Weekly astronomy sessions', 'Telescope training', 'Star gazing events', 'Astro-photography basics', 'Science project guidance', 'Competition preparation'],
        ageGroup: 'Classes 3–12',
        mode: 'School-based (offline)',
        color: '#f97316',
      },
      {
        id: 'space-explorers-workshop',
        title: 'Space Explorers Workshop',
        path: '/services/school-programs/space-explorers-workshop',
        shortDesc: 'SPACE Explorers Workshops are specialized astronomy and space science theme-based workshops, age-group specific.',
        description: `Space Explorers Workshops are focused, theme-based short-duration workshops that bring the universe into the classroom. Each workshop is carefully designed around a specific space/astronomy theme and is appropriate for the age-group of participants.

Topics include the Solar System, black holes, space missions, Mars exploration, rocketry basics, and more. These workshops blend storytelling, multimedia, DIY activities, and live demonstrations for an immersive learning experience.`,
        features: ['Theme-based sessions', 'DIY model building', 'Interactive presentations', 'Expert-led discussions', 'Age-appropriate content', 'STEM integration'],
        ageGroup: 'Classes 1–12',
        mode: 'School-based (offline)',
        color: '#8b5cf6',
      },
      {
        id: 'universe-in-the-school',
        title: 'Universe in the School',
        path: '/services/school-programs/universe-in-the-school',
        shortDesc: 'An Interdisciplinary Space, Astronomy & STEM Education program integrated into the school curriculum.',
        description: `The Universe In The School Programme (UITS) is an Interdisciplinary Space, Astronomy & STEM Education initiative that integrates space science seamlessly into the existing school curriculum. It transforms classrooms into centers of scientific inquiry and exploration.

UITS is structured as an academic-year-long enrichment program with monthly themes, project work, and periodic assessments. It empowers teachers with training and resources while keeping students engaged through a variety of hands-on activities.`,
        features: ['Full-year curriculum integration', 'Teacher training & resources', 'Monthly themed modules', 'Annual astronomy exposition', 'Project-based learning', 'NEP 2020 aligned'],
        ageGroup: 'Classes 4–10',
        mode: 'School-based (offline)',
        color: '#06b6d4',
      },
      {
        id: 'space-innovators-club',
        title: "Space Innovator's Club",
        path: '/services/school-programs/space-innovators-club',
        shortDesc: "SPACE Innovator's Club includes Robotics, Drone, AI and IoT modules — a co-curricular program.",
        description: `SPACE Innovator's Club is a cutting-edge co-curricular program that combines the excitement of space science with the practicality of modern STEM disciplines — Robotics, Drones, Artificial Intelligence, and IoT.

Students learn to conceptualize, design, build, and program robots and drones inspired by real space mission hardware. AI and IoT modules help them understand how technology powers modern space exploration. The club culminates in an inter-school innovation showcase.`,
        features: ['Robotics design & programming', 'Drone flying & mission planning', 'AI & machine learning basics', 'IoT project building', 'Inter-school competitions', 'Real space mission case studies'],
        ageGroup: 'Classes 6–12',
        mode: 'School-based (offline)',
        color: '#10b981',
      },
      {
        id: 'space-mobile-planetarium',
        title: 'Space Mobile Planetarium',
        path: '/services/school-programs/space-mobile-planetarium',
        shortDesc: 'A theater and cinema all rolled into one for a virtual Astronomy Experience — right at your school.',
        description: `The Space Mobile Planetarium brings a full-dome immersive astronomy experience directly to schools. It is a specially designed inflatable dome with a state-of-the-art digital projection system that simulates the night sky and space environments with stunning accuracy.

Students can experience the solar system, the Milky Way, eclipses, meteor showers, and distant nebulae without leaving their school campus. Each show is narrated and interactive, with program content available in multiple languages.`,
        features: ['Full-dome immersive experience', 'High-definition star projection', 'Live sky simulation', 'Multi-language narrator options', 'Programs for all grades', 'Portable & school-friendly'],
        ageGroup: 'All age groups',
        mode: 'School-based (offline)',
        color: '#f59e0b',
      },
    ],

    onlinePrograms: [
      {
        id: 'astronomy-camp',
        title: 'Astronomy Camp',
        path: '/services/online-programs/astronomy-camp',
        shortDesc: 'An immersive online summer / winter astronomy camp for young space enthusiasts.',
        description: `The SPACE India Astronomy Camp is a live, online multi-day camp that immerses students in the world of astronomy and space science. Running during summer and winter breaks, the camp features daily live sessions with expert astronomers, interactive Q&A, overnight virtual star parties, and exciting group activities.

Participants earn a certificate and gain practical experience in identifying constellations, understanding space missions, and building simple astronomical models at home.`,
        features: ['Live expert-led sessions', 'Virtual star gazing nights', 'DIY activities kit (optional)', 'Certificate of completion', 'Summer & winter editions', 'Global participants'],
        ageGroup: 'Ages 8–18',
        mode: 'Online (Live)',
        color: '#f97316',
      },
      {
        id: 'iastronomer',
        title: 'iAstronomer',
        path: '/services/online-programs/iastronomer',
        shortDesc: 'A structured online astronomy course to earn the prestigious iAstronomer certification.',
        description: `iAstronomer is SPACE India's flagship online certification program for students who want a structured and in-depth astronomical education. The program covers fundamentals of astronomy, telescopy, astrophysics concepts, historical discoveries, and cutting-edge space missions.

The program runs over several weeks with recorded video modules, live doubt-clearing sessions, assignments, quizzes, and a final project. Successful candidates earn the internationally recognized iAstronomer certificate.`,
        features: ['Structured video curriculum', 'Live doubt-clearing', 'Assignments & quizzes', 'Final project submission', 'International certification', 'Flexible schedule'],
        ageGroup: 'Classes 5–12 & Adults',
        mode: 'Online (Self-paced + Live)',
        color: '#8b5cf6',
      },
      {
        id: 'voyager',
        title: 'Voyager',
        path: '/services/online-programs/voyager',
        shortDesc: 'A premium online space science community and learning program for the most passionate young astronomers.',
        description: `Voyager is SPACE India's premium online membership program for the most passionate young astronomers. Members gain year-round access to a curated library of space science content, monthly live sessions with professional astronomers and scientists, exclusive webinars on current space events, and a vibrant community of like-minded peers from across India.

Voyager members also get exclusive early access to SPACE India events, competitions, and astronomical equipment discounts.`,
        features: ['Unlimited content library', 'Monthly live expert sessions', 'Exclusive webinars', 'Active peer community', 'Event early access', 'Equipment discounts'],
        ageGroup: 'Classes 6–12 & Adults',
        mode: 'Online (Subscription)',
        color: '#06b6d4',
      },
    ],

    labObservatory: {
      id: 'khagolshala',
      title: 'Khagolshala – Astronomy & Space Science Lab',
      path: '/services/labs-observatory/khagolshala-astronomy-space-science-lab',
      description: `Khagolshala (meaning "House of the Sky") is SPACE India's comprehensive Astronomy and Space Science Lab solution for schools and institutions. It transforms a dedicated room or space into a world-class astronomy learning center equipped with professional-grade instruments, models, and digital learning aids.

The lab setup includes telescopes, orreries, planispheres, star charts, scale models of the solar system, meteorite samples, replica spacecraft components, and a digital dome projection system. A fully equipped Khagolshala also comes with teacher training and an annual content refresh program.`,
      features: [
        'Professional telescope array', 'Scale solar system models', 'Digital dome mini-planetarium',
        'Meteorite & mineral samples', 'Astrophysics demonstration kits', 'Interactive wall murals',
        'Teacher training included', 'Annual content refresh',
      ],
    },

    competitionOlympiad: {
      title: 'Competition & Olympiad',
      description: `SPACE India organizes and facilitates participation in national and international astronomy and space science competitions and olympiads. These events challenge students to apply their knowledge and creativity while competing with peers on a larger stage.

Programs include the International Astronomy and Astrophysics Olympiad (IAAO), National Astronomy Olympiad, IASC Asteroid Search Campaigns, and SPACE India's own annual astronomy competitions. Participation builds confidence, critical thinking, and scientific rigor.`,
      events: [
        'International Astronomy & Astrophysics Olympiad (IAAO)',
        'National Astronomy Olympiad',
        'IASC Asteroid Search Campaign',
        'SPACE India Annual Astronomy Quiz',
        'Astrophotography Contest',
        'Space Model Building Contest',
        'Essay & Poster Competitions',
      ],
    },

    travelWithUs: {
      title: 'Travel With Us',
      description: `SPACE India's "Travel With Us" program offers curated astronomy-themed educational tours to iconic space science destinations across India and internationally. These aren't ordinary field trips — they are meticulously planned immersive journeys where students interact with scientists, observe rare astronomical phenomena, and visit observatories, ISRO campuses, and planetariums.

Recent tours include Ladakh dark-sky expeditions, ISRO Space Center visits, Jantar Mantar heritage tours, and international trips to JPL NASA, ESA facilities, and world-famous observatories.`,
      destinations: [
        'Ladakh Dark Sky Expedition', 'ISRO Bangalore / Sriharikota Visit',
        'Jantar Mantar Historical Tour (Delhi & Jaipur)', 'Nainital Observatory Visit',
        'International: NASA JPL (USA)', 'International: ESA (Europe)',
        'Raman Research Institute Bangalore', 'Tata Institute of Fundamental Research Mumbai',
      ],
    },
  },

  // Testimonials
  testimonials: [
    { name: 'Student', quote: 'The Space Astronomy Club completely changed my perspective on science. I now want to pursue astrophysics!', school: 'DPS Faridabad', rating: 5 },
    { name: 'Teacher',  quote: 'The Universe in the School programme is beautifully integrated with our existing curriculum. Students love it!', school: 'Bal Bharati Public School', rating: 5 },
    { name: 'Principal', quote: 'SPACE India brought professional-level astronomy education to our school. The mobile planetarium was a huge hit!', school: 'Manav Rachna International School', rating: 5 },
    { name: 'Parent',   quote: 'After attending the Astronomy Camp, my daughter started her own astronomy journal. SPACE India is exceptional.', school: 'Chinmaya Vidyalaya', rating: 5 },
  ],

  // FAQs
  faqs: [
    {
      question: 'Why pursue Astronomy & Space Sciences?',
      answer: 'Astronomy is the oldest science and touches every aspect of modern life — from satellites enabling GPS and telecommunications, to space missions advancing medical technology. Studying astronomy develops critical thinking, math skills, and a deep scientific temperament. More importantly, it inspires wonder and curiosity — the foundation of all great achievements.'
    },
    {
      question: 'What kind of programs do you have for schools?',
      answer: 'We offer a wide range of school-based programs: Space Astronomy Club (regular club format), Space Explorers Workshop (theme-based workshops), Universe in the School (curriculum-integrated year-long program), Space Innovator\'s Club (Robotics, Drones, AI & IoT), Space Mobile Planetarium (immersive dome experience), and Khagolshala (dedicated astronomy lab setup).'
    },
    {
      question: 'What skills can one develop being part of your programs?',
      answer: 'Our programs develop a wide spectrum of 21st-century skills: scientific thinking and inquiry, data analysis, critical observation, teamwork and collaboration, presentation and communication, creative problem-solving, digital literacy, and a deep passion for lifelong learning.'
    },
    {
      question: 'What are the future career options if I take up Astronomy?',
      answer: 'Astronomy and space science open doors to careers as: Astrophysicist, Astronomer, Space Systems Engineer, Satellite Engineer, Data Scientist (using astronomical datasets), Science Communicator, Aerospace Engineer, Remote Sensing Scientist, Planetarium Educator, and many more. With India\'s growing space sector (ISRO, private space companies), opportunities are expanding rapidly.'
    },
    {
      question: 'How can our school enroll in SPACE India programs?',
      answer: 'Simply reach out to us via our Contact page, email getintouch@space-india.com, or call +91-74020 74020. Our team will schedule a meeting, understand your school\'s needs, and customize the ideal program for your student community.'
    },
    {
      question: 'Are programs available online?',
      answer: 'Yes! We offer robust online programs including Astronomy Camp (seasonal live camps), iAstronomer (certified online course), and Voyager (premium subscription program). All online programs are delivered live via video conferencing with recorded sessions available for review.'
    },
  ],

  // Blogs (placeholder - real content to be added)
  blogs: [
    {
      slug: 'antariksh-darshan-mahoba-2026',
      title: 'Antariksh Darshan – Mahoba 2026: When Heritage Spoke to the Heavens',
      date: '2026-02-26',
      excerpt: 'In the timeless heart of Bundelkhand, where history breathes through ancient temples and fort walls, SPACE India organized a remarkable astronomical event...',
      category: 'Events',
      readTime: '5 min read',
    },
    {
      slug: 'gaganyaan-india-human-space-mission',
      title: "Rockets, Risk, and Return: India's Bold Human Space Mission 'Gaganyaan'",
      date: '2026-01-17',
      excerpt: "'Space, no longer a distant dream but a future we are actively building.' India's Gaganyaan mission represents a monumental leap in the nation's space ambitions...",
      category: 'Space Science',
      readTime: '8 min read',
    },
    {
      slug: 'astro-carnival-2025-delhi',
      title: 'WHEN DELHI LOOKED UP: Astro Carnival 2025 Turns GMR Aerocity Into A Cosmic Playground',
      date: '2025-11-26',
      excerpt: 'New Delhi witnessed an astronomical spectacle as Astro Carnival 2025 transformed the GMR Aerocity into a vibrant celebration of space science...',
      category: 'Events',
      readTime: '6 min read',
    },
  ],

  // Space Calendar events (sample events - real ones to be added)
  calendarEvents: [
    { date: '2026-03-20', name: 'March Equinox', type: 'Astronomical', description: 'Day and night are approximately equal. Spring begins in the Northern Hemisphere.', visibility: 'Worldwide' },
    { date: '2026-04-08', name: 'Total Solar Eclipse', type: 'Eclipse', description: 'A total solar eclipse visible from parts of the world. Use proper solar filters.', visibility: 'Select regions' },
    { date: '2026-04-22', name: 'Lyrid Meteor Shower Peak', type: 'Meteor Shower', description: 'One of the oldest known meteor showers, producing up to 20 meteors per hour at its peak.', visibility: 'Northern Hemisphere best' },
    { date: '2026-05-05', name: 'Eta Aquarid Meteor Shower Peak', type: 'Meteor Shower', description: 'Debris from Halley\'s Comet produces up to 40 meteors per hour in good conditions.', visibility: 'Southern Hemisphere best' },
    { date: '2026-06-21', name: 'June Solstice', type: 'Astronomical', description: 'The longest day of the year in the Northern Hemisphere. Sun reaches its northernmost point.', visibility: 'Worldwide' },
    { date: '2026-08-11', name: 'Perseid Meteor Shower Peak', type: 'Meteor Shower', description: 'One of the best meteor showers of the year, producing up to 100 meteors per hour.', visibility: 'Northern Hemisphere' },
    { date: '2026-09-23', name: 'September Equinox', type: 'Astronomical', description: 'Day and night are approximately equal. Autumn begins in the Northern Hemisphere.', visibility: 'Worldwide' },
    { date: '2026-10-06', name: 'Draconid Meteor Shower', type: 'Meteor Shower', description: 'A shower with variable intensity caused by debris from comet 21P/Giacobini-Zinner.', visibility: 'Northern Hemisphere' },
    { date: '2026-12-13', name: 'Geminid Meteor Shower Peak', type: 'Meteor Shower', description: 'The most prolific meteor shower, producing up to 120 multi-colored meteors per hour.', visibility: 'Worldwide' },
    { date: '2026-12-21', name: 'December Solstice', type: 'Astronomical', description: 'The shortest day of the year in the Northern Hemisphere. Winter officially begins.', visibility: 'Worldwide' },
  ],
}

export default siteData
