import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'

const styles = {
  sidebar: () => ({
  }),
  internalLink: () => ({
    display: 'block'
  })
}

const Sidebar = createComponent(styles.sidebar)
const InternalLink = createComponent(styles.internalLink, Link, ['to', 'exact'])

class SidebarContainer extends Component {
  render() {
    return (
      <Sidebar>
        <InternalLink to="/articles">Articles</InternalLink>
        <InternalLink to="/datasets">Datasets</InternalLink>
        <InternalLink to="/events">Events</InternalLink>
        <InternalLink to="/papers">Papers</InternalLink>
        <InternalLink to="/projects">Projects</InternalLink>
      </Sidebar>
    )
  }
}

export default SidebarContainer