import { action, observable, set } from 'mobx'

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

  @action putArticle(data) {
    this.loading = true

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'test'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    }

    fetch(`${process.env.INFERNO_APP_API}/article/${data.id}`, options)
      .then(response => response.json())
      .then(article => this.articles.map(i => i.id === data.id ? set(i, article) : i))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default ArticleStore