import { inject, observer } from 'inferno-mobx'
import { Link } from 'inferno-router'

const AdminArticleIndexContainer = ({ ArticleStore }) => {
  ArticleStore.fetchArticles()

  return (
    <div>
      { ArticleStore.articles.map(article => (
        <div>
          <Link to={`/admin/articles/${article.slug}`}>{article.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default inject('ArticleStore')(observer(AdminArticleIndexContainer))