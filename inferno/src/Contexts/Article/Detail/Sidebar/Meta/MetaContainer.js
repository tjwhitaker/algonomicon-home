import { createComponent } from 'inferno-fela'
import { Minion } from '../../../../../Shared/Theme/Text'
import Field from './Field'

const Meta = createComponent(() => ({
  padding: '1.5rem 0'
}))

const MetaContainer = ({ article }) => (
  <div>
    <Minion>Meta</Minion>
    { article && 
      <Meta>
        <Field>Author: { article.author }</Field>
        <Field>Created: { article.createdAt }</Field>
        <Field>Updated: { article.updatedAt }</Field>
      </Meta>
    }
  </div>
)

export default MetaContainer