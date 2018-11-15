import { action, observable } from 'mobx'

class PaperStore {
  @observable papers = []

  @action
  fetchPapers() {
    this.papers = []
  }
}

export default PaperStore