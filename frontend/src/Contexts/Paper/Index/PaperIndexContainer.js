import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import FiltersContainer from './Filters/FiltersContainer'

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
    paddingLeft: '1.4rem'
  })
}

const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)
const Sidebar = createComponent(styles.sidebar)

class PaperIndexContainer extends Component {
  componentDidMount() {
    document.title = 'Papers | Algonomicon'
  }

  render() {
    return (
        <Grid>
          <Nav>
          </Nav>
          <Main>
            <ShowcaseContainer />
          </Main>
          <Sidebar>
            <FiltersContainer />
          </Sidebar>
        </Grid>
    )
  }
}

export default PaperIndexContainer