import { createComponent } from 'inferno-fela'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem'
}))

const SidebarContainer = ({ dataset }) => (
  <Sidebar>
    <p>Lorem</p>
  </Sidebar>
)

export default SidebarContainer