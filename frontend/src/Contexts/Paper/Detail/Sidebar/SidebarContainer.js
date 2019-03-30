import { createComponent } from 'inferno-fela'
import MetaContainer from './Meta/MetaContainer'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem'
}))

const SidebarContainer = ({ paper }) => (
  <Sidebar>
    <MetaContainer paper={paper} />
  </Sidebar>
)

export default SidebarContainer