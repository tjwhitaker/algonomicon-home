import FeedContainer from './Feed/FeedContainer'
import { css } from 'glamor'
import { minion } from '../../../../Shared/Theme/Text'

const sidebar = css({
  paddingLeft: '1.5rem',
  maxHeight: '100%',
  overflow: 'hidden',
  position: 'relative'
})

export const SidebarContainer = () => (
  <div {...sidebar}>
    <h3 {...minion}>FEED</h3>
    <FeedContainer/>
  </div>
)