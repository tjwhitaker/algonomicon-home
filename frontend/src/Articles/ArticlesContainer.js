import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Shared/Categories/CategoriesContainer'
import FiltersContainer from './Filters/FiltersContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import WrapperContainer from '../Shared/Wrapper/WrapperContainer'

const styles = {
  grid: () => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
    gridTemplateAreas: 
      `'nav nav'
       'main sidebar'`
  }),
  nav: () => ({
    gridArea: 'nav'
  }),
  main: () => ({
    gridArea: 'main',
    borderRight: '1px solid #ccc',
    paddingRight: '1.4rem'
  }),
  sidebar: () => ({
    gridArea: 'sidebar',
    paddingLeft: '1.4rem',
    maxHeight: '100%',
    overflow: 'hidden'
  }),
  heading: () => ({
    color: '#aaa',
    borderBottom: '1px solid #ccc',
    fontSize: '1.4rem',
    padding: '1.4rem 0',
    lineHeight: '1',
    fontFamily: 'monospace',
    display: 'block',
    textTransform: 'uppercase'
  })
}

const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)
const Sidebar = createComponent(styles.sidebar)

class ArticlesContainer extends Component {
  render() {
    return (
      <WrapperContainer>
        <Grid>
          <Nav>
            <CategoriesContainer />
          </Nav>
          <Main>
            <ShowcaseContainer />
          </Main>
          <Sidebar>
            <FiltersContainer />
          </Sidebar>
        </Grid>
      </WrapperContainer>
    )
  }
}

export default ArticlesContainer