import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import TableContainer from './Table/TableContainer'
import FiltersContainer from './Filters/FiltersContainer'
import CategoriesContainer from '../../Shared/Categories/CategoriesContainer'
import WrapperContainer from '../../Shared/Wrapper/WrapperContainer'

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
  })
}

const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)
const Sidebar = createComponent(styles.sidebar)

class EventIndexContainer extends Component {
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
          <Sidebar>
            <FiltersContainer />
          </Sidebar>
        </Grid>
      </WrapperContainer>
    )
  }
}

export default EventIndexContainer