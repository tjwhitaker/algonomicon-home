import { observable, runInAction } from 'mobx'

class PaperStore {
  @observable papers = []
  @observable loading = false
  
  fetchPapers = async () => {
    if (this.papers.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/papers`)
      const papers = await response.json()

      runInAction(() => {
        this.papers = papers
      })
    }
  }

  fetchPaper = (slug) => {
    if (this.papers.length === 0) {
      this.fetchPapers()
    }

    return this.papers.find(paper => paper.slug === slug)
  }
}

export default PaperStore