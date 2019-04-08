import { createComponent } from 'inferno-fela'

const Sidebar = createComponent(() => ({
  gridArea: 'sidebar',
  background: '#eee',
  padding: '1.5rem'
}))

const SidebarContainer = () => (
  <Sidebar>
    Sidebar
  </Sidebar>
)

export default SidebarContainer