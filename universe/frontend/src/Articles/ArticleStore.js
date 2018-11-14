import { observable } from 'mobx'

class ArticleStore {
  @observable articles = []

  constructor() {}
}

export default ArticleStore