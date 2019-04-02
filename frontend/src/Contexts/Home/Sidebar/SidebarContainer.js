import { createComponent } from 'inferno-fela'
import FeedContainer from './Feed/FeedContainer'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem',
  maxHeight: '100%',
  overflow: 'hidden',
  position: 'relative'
}))

const SidebarContainer = () => (
  <Sidebar>
    <FeedContainer />
  </Sidebar>
)

export default SidebarContainer