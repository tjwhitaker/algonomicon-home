import { createComponent } from 'inferno-fela'
import MetaContainer from './Meta/MetaContainer'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem'
}))

const SidebarContainer = ({ video }) => (
  <Sidebar>
    <MetaContainer video={video} />
  </Sidebar>
)

export default SidebarContainer