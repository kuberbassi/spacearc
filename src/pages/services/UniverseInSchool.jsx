import ServiceDetailPage from '../../components/ServiceDetailPage'
import siteData from '../../data/siteData'

const prog = siteData.services.schoolPrograms.find(p => p.id === 'universe-in-the-school')
const related = siteData.services.schoolPrograms.filter(p => p.id !== prog.id)

export default function UniverseInSchool() {
  return (
    <ServiceDetailPage
      program={prog}
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'School Programs', path: '/services/school-programs' }, { label: prog.title }]}
      relatedPrograms={related.slice(0, 3)}
    />
  )
}
