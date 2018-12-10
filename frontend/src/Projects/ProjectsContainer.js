import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Shared/Categories/CategoriesContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import WrapperContainer from '../Shared/Wrapper/WrapperContainer'

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

class ProjectsContainer extends Component {
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
        </Grid>
      </WrapperContainer>
    )
  }
}

export default ProjectsContainer