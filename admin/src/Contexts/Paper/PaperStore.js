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

  @action putPaper(data) {
    this.loading = true

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'test'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    }

    fetch(`${process.env.INFERNO_APP_API}/papers/${data.id}`, options)
      .then(response => response.json())
      .then(paper => this.papers.map(i => i.id === data.id ? set(i, paper) : i))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default PaperStore