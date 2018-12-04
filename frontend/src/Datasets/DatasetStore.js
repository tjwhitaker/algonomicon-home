import { action, observable } from 'mobx'

class DatasetStore {
  @observable datasets = []

  @action
  fetchDatasets() {
    fetch('http://localhost:8000/datasets')
      .then(response => response.json())
      .then(datasets => this.datasets = datasets)
  }
}

export default DatasetStore