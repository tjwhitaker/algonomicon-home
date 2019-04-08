import { observable } from 'mobx'

class RegistrationStore {
  @observable email = '' 

  handleChange = (event) => {
      this.email = event.target.value 
  }

  handleSubmit = async () => {
    let data = {email: this.email}

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    return await fetch('http://localhost:8000/users', options)
  }
}

export default RegistrationStore