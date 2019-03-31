import { createComponent } from 'inferno-fela'
import { Minion } from '../../../../../Shared/Theme/Text'
import Field from './Field'

const Meta = createComponent(() => ({
  padding: '1.5rem 0'
}))

const MetaContainer = ({ dataset }) => (
  <div>
    <Minion>Meta</Minion>
    { dataset && 
      <Meta>
        <Field>Creator: { dataset.creator }</Field>
        <Field>Instances: { dataset.instances }</Field>
        <Field>Created: { dataset.createdAt }</Field>
        <Field>Updated: { dataset.updatedAt }</Field>
      </Meta>
    }
  </div>
)

export default MetaContainer