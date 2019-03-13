import { createComponent } from 'inferno-fela'
import { Minion } from '../../../../../../Shared/Theme/Text'
import Tag from './Tag'

const Tags = createComponent(() => ({
  padding: '1.5rem 0',
  lineHeight: '1'
}))

const TagsContainer = () => (
  <div>
    <Minion>Tags</Minion>
    <Tags>
      <Tag>Art</Tag>
      <Tag>Fun</Tag>
      <Tag>Games</Tag>
      <Tag>General</Tag>
      <Tag>News</Tag>
      <Tag>Language</Tag>
      <Tag>Vision</Tag>
      <Tag>Art</Tag>
      <Tag>Fun</Tag>
      <Tag>Games</Tag>
      <Tag>General</Tag>
      <Tag>News</Tag>
      <Tag>Language</Tag>
      <Tag>Vision</Tag>
      <Tag>Art</Tag>
      <Tag>Fun</Tag>
      <Tag>Games</Tag>
      <Tag>General</Tag>
      <Tag>News</Tag>
      <Tag>Language</Tag>
      <Tag>Vision</Tag>
    </Tags>
  </div>
)

export default TagsContainer