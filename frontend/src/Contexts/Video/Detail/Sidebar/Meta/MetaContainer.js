import { createComponent } from 'inferno-fela'
import { Minion } from '../../../../../Shared/Theme/Text'
import Field from './Field'

const Meta = createComponent(() => ({
  padding: '1.5rem 0'
}))

const MetaContainer = ({ video }) => (
  <div>
    <Minion>Meta</Minion>
    { video &&
      <Meta>
        <Field>Creator: { video.creator }</Field>
        <Field>Views: { video.views }</Field>
        <Field>Created: { video.createdAt }</Field>
        <Field>Updated: { video.updatedAt }</Field>
      </Meta>
    }
  </div>
)

export default MetaContainer