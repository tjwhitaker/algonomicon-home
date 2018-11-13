import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import TableContainer from './Table/TableContainer'
const styles = {
  wrapper: () => ({
    maxWidth: '1024px',
    padding: '1.4rem',
    margin: '0 auto'
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

class EventsContainer extends Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <Nav>
            <CategoriesContainer />
          </Nav>
          <Main>
            <TableContainer />
          </Main>
        </Grid>
      </Wrapper>
    )
  }
}

export default EventsContainer