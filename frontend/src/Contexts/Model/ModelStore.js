import { action, observable } from 'mobx'

class ModelStore {
  @observable models = []
  @observable loading = false

  @action fetchModels() {
    this.loading = true
    
    fetch(`${process.env.INFERNO_APP_API}/models`)
      .then(response => response.json())
      .then(models => this.models = models)
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default ModelStore