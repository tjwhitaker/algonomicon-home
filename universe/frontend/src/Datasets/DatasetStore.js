import { action, observable } from 'mobx'

class DatasetStore {
  @observable datasets = []

  @action
  fetchDatasets() {
    this.datasets = [
      {
        name: 'Fire Dataset',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium neque aliquam tempora perspiciatis ducimus ad necessitatibus vero dolorem nulla suscipit non, est aliquid magni excepturi cum ipsum vitae architecto error!',
        attributes: '23',
        instances: '1699',
        format: 'CSV'
      }
    ]
  }
}

export default DatasetStore