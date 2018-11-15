import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import FiltersContainer from './Filters/FiltersContainer'
import TableContainer from './Table/TableContainer'

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
    gridArea: 'main',
    borderRight: '1px solid #ccc',
    paddingRight: '1.4rem'
  })
}

const Wrapper = createComponent(styles.wrapper)
const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)

class DatasetsContainer extends Component {
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

export default DatasetsContainer