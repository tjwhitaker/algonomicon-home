import { Component } from 'inferno'

const styles = {
  postContainer: {
    'border-bottom': '1px solid #ccc',
    'padding': '10px 0',
    'display': 'flex'
  },
  avatarContainer: {
    'flex': '0'
  },
  avatar: {
    'width': '40px'
  },
  contentContainer: {
    'flex': '1',
    'min-width': '50%',
    'margin-left': '10px'
  },
  username: {
    'font-weight': 'bold'
  },
  date: {
    'color': '#aaa',
    'font-size': '1.1rem',
    'margin': '0'
  }
}

class PostContainer extends Component {
  render() {
    return (
      <div style={styles.postContainer}>
        <div style={styles.avatarContainer}>
          <img style={styles.avatar} src={this.props.post.account.avatar} alt="Avatar" />
        </div>
        <div style={styles.contentContainer}>
          <span style={styles.username}>{this.props.post.account.username}</span>
          <div className="content" dangerouslySetInnerHTML={{__html: this.props.post.content}}></div>
          <p style={styles.date}>{this.props.post.created_at}</p>
        </div>
      </div>
    )
  }
}

export default PostContainer