import { action, observable, set } from 'mobx'

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

  @action putDataset(data) {
    this.loading = true

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'test'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    }

    fetch(`${process.env.INFERNO_APP_API}/datasets/${data.id}`, options)
      .then(response => response.json())
      .then(dataset => this.datasets.map(i => i.id === data.id ? set(i, dataset) : i))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default DatasetStore