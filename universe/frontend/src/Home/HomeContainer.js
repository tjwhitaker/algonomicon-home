import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import FeedContainer from './Feed/FeedContainer'

const styles = {
  wrapper: () => ({
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '10px'
  }),
  grid: () => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
  }),
  main: () => ({
    borderRight: '1px solid #ccc',
    paddingRight: '20px'
  }),
  sidebar: () => ({
    paddingLeft: '20px',
    maxHeight: '100%',
    overflow: 'hidden'
  }),
  heading: () => ({
    color: '#aaa',
    borderBottom: '1px solid #ccc',
    fontSize: '1.4rem',
    padding: '10px 0',
    fontFamily: 'monospace',
    display: 'block',
    textTransform: 'uppercase'
  }),
}

const Wrapper = createComponent(styles.wrapper)
const Grid = createComponent(styles.grid)
const Main = createComponent(styles.main)
const Sidebar = createComponent(styles.sidebar)
const Heading = createComponent(styles.heading, 'h3')

class HomeContainer extends Component {
  render() {
    return (
      <>
        <CategoriesContainer />
        <Wrapper>
          <Grid>
            <Main>
              <ShowcaseContainer />
            </Main>
            <Sidebar>
              <Heading>Feed</Heading>
              <FeedContainer />
            </Sidebar>
          </Grid>
        </Wrapper>
      </>
    )
  }
}

export default HomeContainer