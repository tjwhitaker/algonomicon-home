import { observable, runInAction } from 'mobx'

class UserStore {
  @observable email =''
  @observable password = ''
  @observable isAuthenticated = false

  handleChange = (event) => {
    return {
      email: () => { this.email = event.target.value },
      password: () => { this.password = event.target.value }
    }[event.target.name]()
  }

  handleSubmit = async () => {
    const data = { email: this.email, password: this.password }

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }
    
    const response = await fetch(`${process.env.INFERNO_APP_API}/login`, options)
    const status = await response.json()

    runInAction(() => {
      this.isAuthenticated = status === 'Success' ? true : false
    })
  }
}

export default UserStore