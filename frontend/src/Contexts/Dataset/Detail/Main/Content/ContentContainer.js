import { createComponent } from 'inferno-fela'
import { Paragon } from '../../../../../Shared/Theme/Text'

const Content = createComponent(() => ({

}), 'div', ['dangerouslySetInnerHTML'])

const Title = createComponent(() => ({
  marginBottom: '1.5rem'
}), Paragon)

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