import { inject, observer } from 'inferno-mobx'

const AdminArticleIndexContainer = ({ ArticleStore }) => {
  ArticleStore.fetchArticles()

  return (
    <div>
      { ArticleStore.articles.map(article => (
        <p>{article.name}</p>
      ))}
    </div>
  )
}

export default inject('ArticleStore')(observer(AdminArticleIndexContainer))