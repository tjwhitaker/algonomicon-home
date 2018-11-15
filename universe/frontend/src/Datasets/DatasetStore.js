import { action, observable } from 'mobx'

class DatasetStore {
  @observable datasets = []

  @action
  fetchDatasets() {
    this.datasets = [
      {
        name: 'Fire Dataset',
        attributes: '23',
        instances: '1699',
        format: 'CSV'
      }
    ]
  }
}

export default DatasetStore