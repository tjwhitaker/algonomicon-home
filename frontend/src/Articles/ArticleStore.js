import { action, observable } from 'mobx'

class ArticleStore {
  @observable articles = []

  @action fetchArticles() {
    fetch('http://localhost:8000/articles')
      .then(response => response.json())
      .then(articles => this.articles = articles)
  }
}

export default ArticleStore