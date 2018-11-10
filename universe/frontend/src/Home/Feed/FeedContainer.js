import { Component } from 'inferno'
import PostContainer from './Post/PostContainer'

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

class FeedContainer extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://algonomicon.io/api/v1/timelines/public')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }

  render() {
    return (
      <div style={styles.feedContainer}>
        <style>{postContentStyles}</style>

        {this.state.posts.map(post => (
          <PostContainer post={post} />
        ))}
      </div>
    )
  }
}

export default FeedContainer