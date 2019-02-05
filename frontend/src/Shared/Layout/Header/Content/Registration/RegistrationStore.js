import { action, observable } from 'mobx'

class RegistrationStore {
  @observable email = '' 

  @action handleChange(event) {
    this.email = event.target.value 
  }

  @action handleSubmit() {
    let data = {email: this.email}

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    return fetch('http://localhost:8000/users', options)
  }
}

export default RegistrationStore