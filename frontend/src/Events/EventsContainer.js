import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Shared/Categories/CategoriesContainer'
import TableContainer from './Table/TableContainer'
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

class EventsContainer extends Component {
  render() {
    return (
      <WrapperContainer>
        <Grid>
          <Nav>
            <CategoriesContainer />
          </Nav>
          <Main>
            <TableContainer />
          </Main>
        </Grid>
      </WrapperContainer>
    )
  }
}

export default EventsContainer