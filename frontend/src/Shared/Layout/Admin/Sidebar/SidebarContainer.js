import { createComponent } from 'inferno-fela'
import SidebarLink from './SidebarLink'

const Sidebar = createComponent(() => ({
  gridArea: 'sidebar',
  background: '#eee',
  padding: '1.5rem'
}))

const SidebarContainer = () => (
  <Sidebar>
    <SidebarLink to="/admin/articles" activeClassName="active">Articles</SidebarLink>
    <SidebarLink to="/admin/datasets" activeClassName="active">Datasets</SidebarLink>
    <SidebarLink to="/admin/papers" activeClassName="active">Papers</SidebarLink>
    <SidebarLink to="/admin/projects" activeClassName="active">Projects</SidebarLink>
    <SidebarLink to="/admin/videos" activeClassName="active">Videos</SidebarLink>
  </Sidebar>
)

export default SidebarContainer