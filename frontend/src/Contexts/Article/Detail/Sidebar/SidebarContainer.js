import { createComponent } from 'inferno-fela'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem'
}))

const SidebarContainer = () => (
  <Sidebar></Sidebar>
)

export default SidebarContainer