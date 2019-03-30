import { createComponent } from 'inferno-fela'
import { Minion, LongPrimer } from '../../../../../Shared/Theme/Text'

const Meta = createComponent(() => ({
  padding: '1.5rem 0'
}), LongPrimer)

const MetaContainer = ({ dataset }) => (
  <div>
    <Minion>Meta</Minion>
    { dataset && 
      <Meta>
        <div>Creator: { dataset.creator }</div>
        <div>Instances: { dataset.instances }</div>
        <div>Created: { dataset.createdAt }</div>
        <div>Updated: { dataset.updatedAt }</div>
      </Meta>
    }
  </div>
)

export default MetaContainer