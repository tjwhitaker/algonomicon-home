import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import ArticleContainer from './Post/ArticleContainer'
import DatasetContainer from './Post/DatasetContainer'
import EventContainer from './Post/EventContainer'
import ModelContainer from './Post/ModelContainer'
import PaperContainer from './Post/PaperContainer'
import ProjectContainer from './Post/ProjectContainer'

const styles = {
  feed: () => ({
    maxHeight: '100%',
    marginRight: '-50px',
    paddingRight: '42px',
    overflow: 'scroll',
    position: 'absolute'
  })
}

const Feed = createComponent(styles.feed)

@inject('FeedStore')
@observer class FeedContainer extends Component {
  componentDidMount() {
    this.props.FeedStore.fetchFeed()
  }

  render() {
    return (
      <Feed>
        {this.props.FeedStore.feed.map(item => (
          {
            article: <ArticleContainer data={item} />,
            dataset: <DatasetContainer data={item} />,
            event: <EventContainer data={item} />,
            model: <ModelContainer data={item} />,
            paper: <PaperContainer data={item} />,
            project: <ProjectContainer data={item} />
          }[item.type]
        ))}
      </Feed>
    )
  }
}

export default FeedContainer