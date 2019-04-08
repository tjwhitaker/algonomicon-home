import { createComponent } from 'inferno-fela'
import { NavLink } from 'inferno-router'

const SidebarLink = createComponent(() => ({
  display: 'block'
}), NavLink, ['to', 'activeClassName'])

export default SidebarLink