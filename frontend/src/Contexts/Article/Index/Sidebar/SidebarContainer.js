import FiltersContainer from './Filters/FiltersContainer'
import { createComponent } from 'inferno-fela'

const Sidebar = createComponent(() => ({
  paddingLeft: '1.4rem'
}))

export const SidebarContainer = () => (
  <Sidebar>
    <FiltersContainer />
  </Sidebar>
)