import FeedContainer from './Feed/FeedContainer'
import { Minion } from '../../../../Shared/Theme/Headings'
import { createComponent } from 'inferno-fela'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.4rem',
  maxHeight: '100%',
  overflow: 'hidden',
  position: 'relative'
}))

export const SidebarContainer = () => (
  <Sidebar>
    <Minion>FEED</Minion>
    <FeedContainer/>
  </Sidebar>
)