import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import HeaderContainer from './Header/HeaderContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const styles = {
  layout: () => ({
    display: 'grid',
    width: '100%',
    minHeight: '100vh',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '30rem 1fr',
    gridTemplateAreas: 
      `'nav nav'
       'aside main'`
  }),
  nav: () => ({
    gridArea: 'nav'
  }),
  aside: () => ({
    gridArea: 'aside',
    background: '#ddd',
    padding: '1.4rem'
  }),
  main: () => ({
    gridArea: 'main',
    padding: '1.4rem'
  })
}

const Layout = createComponent(styles.layout)
const Nav = createComponent(styles.nav)
const Aside = createComponent(styles.aside)
const Main = createComponent(styles.main)

class LayoutContainer extends Component {
  render() {
    return (
      <Layout>
        <Nav><HeaderContainer /></Nav>
        <Aside><SidebarContainer /></Aside>
        <Main>{ this.props.children }</Main>
      </Layout>
    )
  }
}

export default LayoutContainer