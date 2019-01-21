import { action, observable } from 'mobx'

class ArticleStore {
  @observable articles = []
  @observable loading = false

  @action fetchArticles() {
    this.loading = true

    fetch(`${process.env.INFERNO_APP_API}/articles`)
      .then(response => response.json())
      .then(articles => this.articles = articles)
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default ArticleStore