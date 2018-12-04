import { action, observable } from 'mobx'

class PaperStore {
  @observable papers = []

  @action fetchPapers() {
    fetch('http://localhost:8000/papers')
      .then(response => response.json())
      .then(papers => this.papers = papers)
  }
}

export default PaperStore