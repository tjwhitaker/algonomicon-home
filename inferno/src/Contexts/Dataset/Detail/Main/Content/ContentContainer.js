import { createComponent } from 'inferno-fela'
import Title from './Title'

const Content = createComponent(() => ({

}), 'div', ['dangerouslySetInnerHTML'])

const ContentContainer = ({ dataset }) => (
  <div>
    { dataset &&
      <div>
        <Title>{ dataset.name }</Title>
        <Content dangerouslySetInnerHTML={{__html: dataset.content}} />
      </div>
    }
  </div>
)

export default ContentContainer