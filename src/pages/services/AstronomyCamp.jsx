import ServiceDetailPage from '../../components/ServiceDetailPage'
import siteData from '../../data/siteData'

const prog = siteData.services.onlinePrograms.find(p => p.id === 'astronomy-camp')
const related = siteData.services.onlinePrograms.filter(p => p.id !== prog.id)

export default function AstronomyCamp() {
  return (
    <ServiceDetailPage
      program={prog}
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'Online Programs', path: '/services/online-programs' }, { label: prog.title }]}
      relatedPrograms={related}
    />
  )
}
