import { observable } from 'mobx'

class FlashStore {
  @observable message = ''
  @observable color = ''
}

export default FlashStore