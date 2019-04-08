import { observable, runInAction } from 'mobx'

class ArticleStore {
  @observable articles = []
  @observable loading = false

  fetchArticles = async () => {
    if (this.articles.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/articles`)
      const articles = await response.json()  

      runInAction(() => {
        this.articles = articles
      })
    }
  }

  fetchArticle = (slug) => {
    if (this.articles.length === 0) {
      this.fetchArticles()
    }

    return this.articles.find(article => article.slug === slug)
  }
}

export default ArticleStore