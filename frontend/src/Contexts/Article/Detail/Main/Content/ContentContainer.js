import { createComponent } from 'inferno-fela'
import Title from './Title'

const Content = createComponent(() => ({
}), 'div', ['dangerouslySetInnerHTML'])

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