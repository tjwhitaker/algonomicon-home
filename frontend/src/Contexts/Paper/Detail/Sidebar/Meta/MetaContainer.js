import { createComponent } from 'inferno-fela'
import { Minion, LongPrimer } from '../../../../../Shared/Theme/Text'
import Field from './Field'

const Meta = createComponent(() => ({
  padding: '1.5rem 0'
}))

const MetaContainer = ({ paper }) => (
  <div>
    <Minion>Meta</Minion>
    { paper &&
      <Meta>
        <Field>Author: { paper.author }</Field>
        <Field>Created: { paper.createdAt }</Field>
        <Field>Updated: { paper.updatedAt }</Field>
      </Meta>
    }
  </div>
)

export default MetaContainer