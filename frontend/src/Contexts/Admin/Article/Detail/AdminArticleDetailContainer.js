import { inject, observer } from 'inferno-mobx'

const AdminArticleDetailContainer = ({ ArticleStore, match: {params} }) => {
  const article = ArticleStore.fetchArticle(params.slug)

  return (
    <div>
      { article && (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" value={article.name} />
          </div>

          <div>
            <label>Slug:</label>
            <input type="text" value={article.slug} />
          </div>

          <div>
            <label>Author:</label>
            <input type="text" value={article.author} />
          </div>

          <div>
            <label>Hero:</label>
            <input type="text" value={article.hero} />
          </div>

          <div>
            <label>Description:</label> 
            <textarea rows="5" value={article.description} />
          </div>

          <div>
            <label>Outline:</label> 
            <textarea rows="10" value={article.outline} />
          </div>

          <div>
            <label>Content:</label> 
            <textarea rows="10" value={article.content} />
          </div>

        </div>
      )}
    </div>
  )
}

export default inject('ArticleStore')(observer(AdminArticleDetailContainer))