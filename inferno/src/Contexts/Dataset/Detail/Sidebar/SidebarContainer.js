import { createComponent } from 'inferno-fela'
import MetaContainer from './Meta/MetaContainer'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem'
}))

const SidebarContainer = ({ dataset }) => (
  <Sidebar>
    <MetaContainer dataset={dataset} />
  </Sidebar>
)

export default SidebarContainer