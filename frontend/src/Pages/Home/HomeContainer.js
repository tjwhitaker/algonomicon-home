import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../../Shared/Categories/CategoriesContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import FeedContainer from './Feed/FeedContainer'
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
  }),
  heading: () => ({
    color: '#777',
    borderBottom: '1px solid #ccc',
    fontSize: '1.2rem',
    padding: '1.4rem 0',
    lineHeight: '1',
    display: 'block',
    textTransform: 'uppercase'
  }),
}

const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)
const Sidebar = createComponent(styles.sidebar)
const Heading = createComponent(styles.heading, 'h3')

class HomeContainer extends Component {
  componentDidMount() {
    document.title = 'Algonomicon'
  }

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
            <Heading>Feed</Heading>
            <FeedContainer />
          </Sidebar>
        </Grid>
      </WrapperContainer>
    )
  }
}

export default HomeContainer