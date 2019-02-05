import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import ShowcaseContainer from './Showcase/ShowcaseContainer'

const styles = {
  grid: () => ({
    display: 'grid',
    gridTemplateAreas: 
      `'nav'
       'main'`
  }),
  nav: () => ({
    gridArea: 'nav'
  }),
  main: () => ({
    gridArea: 'main'
  })
}

const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)

class ProjectIndexContainer extends Component {
  componentDidMount() {
    document.title = 'Projects | Algonomicon'
  }

  render() {
    return (
        <Grid>
          <Nav>
          </Nav>
          <Main>
            <ShowcaseContainer />
          </Main>
        </Grid>
    )
  }
}

export default ProjectIndexContainer