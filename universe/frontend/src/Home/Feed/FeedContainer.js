import { Component } from 'inferno'
import PostContainer from './Post/PostContainer'

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
      <div className="feed-container">
        {this.state.posts.map(post => (
          <PostContainer post={post} />
        ))}
      </div>
    )
  }
}

export default FeedContainer