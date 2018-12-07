import { action, observable } from 'mobx'

class FlashStore {
  @observable message = ''
  @observable color = ''

  @action setFlash(message, color) {
    this.message = message
    this.color = color
  }
}

export default FlashStore