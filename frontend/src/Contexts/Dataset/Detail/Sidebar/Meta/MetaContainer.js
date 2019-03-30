import { createComponent } from 'inferno-fela'
import { Minion, LongPrimer } from '../../../../../Shared/Theme/Text'

const Meta = createComponent(() => ({
  padding: '1.5rem'
}), LongPrimer)

const MetaContainer = ({ dataset }) => (
  <div>
    <Minion>Meta</Minion>
    { dataset && 
      <Meta></Meta>
    }
  </div>
)

export default MetaContainer