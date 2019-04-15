import { createComponent } from 'inferno-fela'
import MetaContainer from './Meta/MetaContainer'
import OutlineContainer from './Outline/OutlineContainer'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem'
}))

const SidebarContainer = ({ article }) => (
  <Sidebar>
    <MetaContainer article={article} />
    <OutlineContainer article={article} />
  </Sidebar>
)

export default SidebarContainer