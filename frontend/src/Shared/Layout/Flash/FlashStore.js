import { action, observable } from 'mobx'

class FlashStore {
  @observable message = ''
  @observable color = ''

  @action setFlash(message, color) {
    this.message = message
    this.color = color
  }

  @action clearFlash() {
    this.message = ''
    this.color = ''
  }
}

export default FlashStore