import { createComponent } from 'inferno-fela'
import { Paragon } from '../../../../../Shared/Theme/Text'

const Content = createComponent(() => ({
}), 'div', ['dangerouslySetInnerHTML'])

const Title = createComponent(() => ({
  marginBottom: '1.5rem'
}), Paragon)


const ContentContainer = ({ article }) => (
  <div>
    { article && (
      <div>
        <Title>{article.name}</Title>
        <img src={article.hero} alt="" />
        <Content dangerouslySetInnerHTML={{__html: article.content}} />
      </div>
    )}
  </div>
)


export default ContentContainer