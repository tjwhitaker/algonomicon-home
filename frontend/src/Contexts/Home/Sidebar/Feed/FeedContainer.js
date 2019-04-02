import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import { Minion } from '../../../../Shared/Theme/Text'
import { PostContainer } from './Post/PostContainer'

const Feed = createComponent(() => ({
  maxHeight: '100%',
  marginRight: '-50px',
  paddingRight: '42px',
  overflow: 'scroll',
  position: 'absolute'
}))

const FeedContainer = ({ FeedStore }) => {
  FeedStore.fetchFeed()

  return (
    <div>
      <Minion>Feed</Minion>
      <Feed>
        { FeedStore.feed.map(item => (
          <PostContainer item={item} />
        ))}
      </Feed>
    </div>
  )
}

export default inject('FeedStore')(observer(FeedContainer))