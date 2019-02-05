import { Component } from 'inferno'
import { PostContainer } from './Post/PostContainer'
import { css } from 'glamor'
import { inject, observer } from 'inferno-mobx'

const feed = css({
  maxHeight: '100%',
  marginRight: '-50px',
  paddingRight: '42px',
  overflow: 'scroll',
  position: 'absolute'
})

@inject('FeedStore')
@observer class FeedContainer extends Component {
  componentDidMount() {
    this.props.FeedStore.fetchFeed()
  }

  render() {
    return (
      <div {...feed}>
        {this.props.FeedStore.feed.map(item => (
          <PostContainer data={item} />
        ))}
      </div>
    )
  }
}

export default FeedContainer