import { action, observable } from 'mobx'

class PaperStore {
  @observable papers = []
  @observable loading = false

  @action fetchPapers() {
    this.loading = true

    fetch(`${process.env.INFERNO_APP_API}/papers`)
      .then(response => response.json())
      .then(papers => this.papers = papers)
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default PaperStore