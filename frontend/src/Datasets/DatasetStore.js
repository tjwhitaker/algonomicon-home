import { action, observable } from 'mobx'

class DatasetStore {
  @observable datasets = []

  @action
  fetchDatasets() {
    fetch(`${process.env.INFERNO_APP_API}/datasets`)
      .then(response => response.json())
      .then(datasets => this.datasets = datasets)
  }
}

export default DatasetStore