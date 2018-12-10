import { action, observable } from 'mobx'

class ArticleStore {
  @observable articles = []

  @action fetchArticles() {
    console.log(process.env);

    fetch(`${process.env.INFERNO_APP_API}/articles`)
      .then(response => response.json())
      .then(articles => this.articles = articles)
  }
}

export default ArticleStore