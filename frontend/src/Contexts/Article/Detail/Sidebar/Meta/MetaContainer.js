import { createComponent } from 'inferno-fela'
import { Minion, LongPrimer } from '../../../../../Shared/Theme/Text'

const Meta = createComponent(() => ({
  padding: '1.5rem 0'
}), LongPrimer)

const MetaContainer = ({ article }) => (
  <div>
    <Minion>Meta</Minion>
    { article && 
      <Meta>
        <div>Author: Tim Whitaker</div>
        <div>Publish Date: March 7th, 2019</div>
      </Meta>
    }
  </div>
)

export default MetaContainer