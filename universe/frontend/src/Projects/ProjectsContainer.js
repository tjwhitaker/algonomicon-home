import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'

const styles = {
  wrapper: () => ({
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '1.4rem'
  }),
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

const Wrapper = createComponent(styles.wrapper)
const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)

class ProjectsContainer extends Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <Nav>
            <CategoriesContainer />
          </Nav>
          <Main>
            <ShowcaseContainer />
          </Main>
        </Grid>
      </Wrapper>
    )
  }
}

export default ProjectsContainer