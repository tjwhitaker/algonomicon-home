import { css } from 'glamor'
import { inject, observer } from 'inferno-mobx'

const title = css({
  marginBottom: '1.5rem'
})

const imageContainer = css({
  position:'relative',
  width: '100%',
  paddingBottom: '50%',
  height: '0',
  background: '#eee',
  marginBottom: '1.5rem'
})

const image = css({
  position: 'absolute',
  height:'100%',
  width: '100%',
  left: '0'
})

const ArticleDetailContainer = ({ ArticleStore, match: {params} }) => {
  const article = ArticleStore.fetchArticle(params.slug)

  return (
    <div>
      { article && (
        <div>
          <h1 {...title}>{article.name}</h1>
          <div {...imageContainer}>
            <img {...image} src={article.hero} alt="" />
          </div>
          <div>{article.content}</div>
        </div>
      )}
    </div>
  )
}

export default inject('ArticleStore')(observer(ArticleDetailContainer))