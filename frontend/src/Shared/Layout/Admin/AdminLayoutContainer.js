import { createComponent } from 'inferno-fela'
import HeaderContainer from './Header/HeaderContainer'
import SidebarContainer from './Sidebar/SidebarContainer'
import MainContainer from './Main/MainContainer'

const AdminLayout = createComponent(() => ({
  display: 'grid',
  height:'100vh',
  width: '100vw',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '30rem 1fr',
  gridTemplateAreas:
  `'header header'
   'sidebar main'`
}))

const AdminLayoutContainer = (props) => (
  <AdminLayout>
    <HeaderContainer />
    <SidebarContainer />
    <MainContainer {...props} />
  </AdminLayout>
)

export default AdminLayoutContainer