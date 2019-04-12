import { observable, toJS } from 'mobx'
import { observer } from 'inferno-mobx'

const state = observable({
  name: '',
  slug: '',
  author: '',
  hero: '',
  description: '',
  outline: '',
  content: ''
})

const handleInput = (event) => {
  state[name] = event.target.value
}

const handleClick = (event) => {
  const payload = toJS(state)
}

const AdminArticleDetailContainer = ({ ArticleStore, match }) => {
  const article = ArticleStore.fetchArticle(match.params.slug)

  return (
    <div>
      { article && (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={state.name} onInput={handleInput} />
          </div>

          <div>
            <label>Slug:</label>
            <input type="text" name="slug" value={state.slug} onInput={handleInput} />
          </div>

          <div>
            <label>Author:</label>
            <input type="text" name="author" value={article.author} onInput={handleInput} />
          </div>

          <div>
            <label>Hero:</label>
            <input type="text" name="hero" value={article.hero} onInput={handleInput} />
          </div>

          <div>
            <label>Description:</label> 
            <textarea rows="5" name="description" value={article.description} onInput={handleInput} />
          </div>

          <div>
            <label>Outline:</label> 
            <textarea rows="15" name="outline" value={article.outline} onInput={handleInput} />
          </div>

          <div>
            <label>Content:</label> 
            <textarea rows="20" name="content" value={article.content} onInput={handleInput} />
          </div>

        </div>
      )}
      <button onClick={ArticleStore.updateArticle}>Submit</button>
    </div>
  )
}

export default inject('ArticleStore')(observer(AdminArticleDetailContainer))