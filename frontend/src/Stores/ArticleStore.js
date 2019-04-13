import { observable, runInAction } from 'mobx'

class ArticleStore {
  @observable articles = []
  @observable isLoading = false

  fetchArticles = async () => {
    if (this.articles.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/articles`)
      const articles = await response.json()  

      runInAction(() => {
        this.articles = articles
      })
    }
  }

  createArticle = async (article) => {
    const data = {
      name: article.name,
      slug: article.slug,
      hero: article.hero,
      author: article.author,
      description: article.description,
      outline: article.outline,
      content: article.content
    }

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}
    }

    const response = await fetch(`${process.env.INFERNO_APP_API}/articles`, options)
  }

  updateArticle = async (article) => {
    const data = {
      name: article.name,
      slug: article.slug,
      hero: article.hero,
      author: article.author,
      description: article.description,
      outline: article.outline,
      content: article.content
    }

    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}
    }

    const response = await fetch(`${process.env.INFERNO_APP_API}/articles/${article.id}`, options)
  }

  deleteArticle = async (id) => {
    const options = {
      method: 'DELETE'
    }

    const response = await fetch(`${process.env.INFERNO_APP_API}/articles/${id}`, options)
  }
}

export default ArticleStore