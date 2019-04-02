import FeedContainer from './Feed/FeedContainer'
import { createComponent } from 'inferno-fela'
import { Minion } from '../../../Shared/Theme/Text'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem',
  maxHeight: '100%',
  overflow: 'hidden',
  position: 'relative'
}))

const SidebarContainer = () => (
  <Sidebar>
    <Minion>Feed</Minion>
    <FeedContainer />
  </Sidebar>
)

export default SidebarContainer