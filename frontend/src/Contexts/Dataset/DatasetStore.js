import { action, observable } from 'mobx'

class DatasetStore {
  @observable datasets = []
  @observable loading = false

  @action fetchDatasets() {
    this.loading = true

    fetch(`${process.env.INFERNO_APP_API}/datasets`)
      .then(response => response.json())
      .then(datasets => this.datasets = datasets)
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default DatasetStore