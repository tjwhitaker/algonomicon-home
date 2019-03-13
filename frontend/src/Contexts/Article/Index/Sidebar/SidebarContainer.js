import { createComponent } from 'inferno-fela'
import FiltersContainer from './Filters/FiltersContainer'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.5rem'
}))

const SidebarContainer = () => (
  <Sidebar>
    <FiltersContainer />
  </Sidebar>
)

export default SidebarContainer