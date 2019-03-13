import { observable, runInAction } from 'mobx'

class DatasetStore {
  @observable datasets = []
  @observable loading = false

  fetchDatasets = async () => {
    if (this.datasets.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/datasets`)
      const datasets = await response.json()

      runInAction(() => {
        this.datasets = datasets
      })
    }
  }

  fetchDataset = (slug) => {
    if (this.datasets.length === 0) {
      this.fetchDatasets()
    }

    return this.datasets.find(dataset => dataset.slug === slug)
  }
}

export default DatasetStore