import ServiceDetailPage from '../../components/ServiceDetailPage'
import siteData from '../../data/siteData'

const prog = siteData.services.schoolPrograms.find(p => p.id === 'space-explorers-workshop')
const related = siteData.services.schoolPrograms.filter(p => p.id !== prog.id)

export default function SpaceExplorersWorkshop() {
  return (
    <ServiceDetailPage
      program={prog}
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'School Programs', path: '/services/school-programs' }, { label: prog.title }]}
      relatedPrograms={related.slice(0, 3)}
    />
  )
}
