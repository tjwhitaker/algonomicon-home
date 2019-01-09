import { action, observable } from 'mobx'

class PaperStore {
  @observable papers = []

  @action fetchPapers() {
    fetch(`${process.env.INFERNO_APP_API}/papers`)
      .then(response => response.json())
      .then(papers => this.papers = papers)
  }
}

export default PaperStore