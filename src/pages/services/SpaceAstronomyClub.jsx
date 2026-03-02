import ServiceDetailPage from '../../components/ServiceDetailPage'
import siteData from '../../data/siteData'

const prog = siteData.services.schoolPrograms.find(p => p.id === 'space-astronomy-club')
const related = siteData.services.schoolPrograms.filter(p => p.id !== 'space-astronomy-club')

export default function SpaceAstronomyClub() {
  return (
    <ServiceDetailPage
      program={prog}
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'School Programs', path: '/services/school-programs' }, { label: prog.title }]}
      relatedPrograms={related.slice(0, 3)}
    />
  )
}
