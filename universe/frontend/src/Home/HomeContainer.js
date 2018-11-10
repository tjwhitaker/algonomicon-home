import { Component } from 'inferno'
import jss from 'jss'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import FeedContainer from './Feed/FeedContainer'

const styles = {
  wrapper: {
    maxWidth: 1024,
    'margin': '0 auto',
    'padding': '10px'
  },
  grid: {
    'display': 'grid',
    'grid-template-columns': 'minmax(0, 2fr) minmax(0, 1fr)'
  },
  firstColumn: {
    'border-right': '1px solid #ccc',
    'padding-right': '20px'
  },
  secondColumn: {
    'padding-left': '20px',
    'max-height': '100%',
    'overflow': 'hidden'
  },
  'heading': {
    'color': '#aaa',
    'border-bottom': '1px solid #ccc',
    'font-size': '1.4rem',
    'padding': '10px 0',
    'font-family': 'monospace',
    'display': 'block',
    'text-transform': 'uppercase'
  }
}

class HomeContainer extends Component {
  render() {
    const { classes } = jss.createStyleSheet(styles).attach()

    return (
      <div>
        <CategoriesContainer />
        <div className={classes.wrapper}>
          <div className={classes.grid}>
            <div className={classes.firstColumn}>
              <ShowcaseContainer />
            </div>
            <div className={classes.secondColumn}>
              <a className={classes.heading} href="https://algonomicon.io">Feed</a>
              <FeedContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer