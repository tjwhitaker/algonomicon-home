import { action, observable } from 'mobx'

class ArticleStore {
  @observable articles = []

  @action fetchArticles() {
    this.articles = [
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      }
    ]
  }
}

export default ArticleStore