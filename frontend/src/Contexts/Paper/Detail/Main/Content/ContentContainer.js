import { createComponent } from 'inferno-fela'
import Title from './Title'

const Content = createComponent(() => ({
}), 'div', ['dangerouslySetInnerHTML'])

const ContentContainer = ({ paper }) => (
  <div>
    { paper &&
      <div>
        <Title>{paper.name}</Title>
        <Content dangerouslySetInnerHTML={{__html: paper.abstract}} />
      </div>
    }
  </div>
)

export default ContentContainer