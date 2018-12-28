import { action, observable } from 'mobx'

class ModelStore {
  @observable models = []

  @action fetchModels() {
    fetch(`${process.env.INFERNO_APP_API}/models`)
      .then(response => response.json())
      .then(models => this.models = models)
  }
}

export default ModelStore