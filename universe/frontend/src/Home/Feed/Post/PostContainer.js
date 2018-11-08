import { Component } from 'inferno'

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">
        <div className="avatar">
          <img src={this.props.post.account.avatar} alt="Avatar" />
        </div>
        <div className="matter">
          <span className="username">{this.props.post.account.username}</span>
          <div className="content" dangerouslySetInnerHTML={{__html: this.props.post.content}}></div>
          <p className="date">{this.props.post.created_at}</p>
        </div>
      </div>
    )
  }
}

export default PostContainer