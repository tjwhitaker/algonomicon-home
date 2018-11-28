import { Component } from 'inferno'
import PostContainer from './Post/PostContainer'
import { inject, observer } from 'inferno-mobx'

const styles = {
  feedContainer: {
    'max-height': '100%',
    'margin-right': '-50px',
    'padding-right': '42px',
    'overflow': 'scroll'
  }
}

const postContentStyles = `
  .content a {
    word-wrap: break-word;
  }
  .content p:last-child {
    margin:0;
  }
`
@inject('FeedStore')
@observer class FeedContainer extends Component {
  componentDidMount() {
    this.props.FeedStore.fetchFeed()
  }

  render() {
    return (
      <div style={styles.feedContainer}>
        <style>{postContentStyles}</style>

        {this.props.FeedStore.feed.map(post => (
          <PostContainer post={post} />
        ))}
      </div>
    )
  }
}

export default FeedContainer