import { action, observable } from 'mobx'

class FlashStore {
  @observable message = ''
  @observable color = ''
  @observable isOpen = false

  @action setFlash(message, color) {
    this.isOpen = true
    this.message = message
    this.color = color
  }

  @action close() {
    this.isOpen = false
  }
}

export default FlashStore