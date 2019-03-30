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
        <p>Author: { article.author }</p>
        <p>Created: { article.createdAt }</p>
        <p>Updated: { article.updatedAt }</p>
      </Meta>
    }
  </div>
)

export default MetaContainer