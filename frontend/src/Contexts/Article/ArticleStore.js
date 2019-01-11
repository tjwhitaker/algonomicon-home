import { action, observable } from 'mobx'

class ArticleStore {
  @observable articles = []
  @observable error = ''
  @observable loading = false

  @action fetchArticles() {
    this.loading = true

    fetch(`${process.env.INFERNO_APP_API}/articles`)
      .then(response => response.json())
      .then(articles => this.resolveArticles(articles))
      .catch(error => this.error = error.message)
      .finally(() => this.loading = false)
  }

  resolveArticles(articles) {
    this.articles = articles
    this.error = ''
  }

  getArticle(id) {
    return this.articles.find(article => article.id == id)
  }
}

export default ArticleStore