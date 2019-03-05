import { createComponent } from 'inferno-fela'
import marked from 'marked'

const Content = createComponent(() => ({
}))


const ContentContainer = ({ article }) => (
  <Content>
    { article && (
      <div>
        <h1>{article.name}</h1>
        <img src={article.hero} alt="" />
        <div dangerouslySetInnerHTML={{__html: marked(article.content)}} />
      </div>
    )}
  </Content>
)


export default ContentContainer