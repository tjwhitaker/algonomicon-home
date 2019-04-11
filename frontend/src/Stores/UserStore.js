import { observable, runInAction } from 'mobx'

class UserStore {
  @observable email = ''
  @observable password = ''
  @observable authenticated = false 

  handleChange = (event) => {
    return {
      email: () => { this.email = event.target.value },
      password: () => { this.password = event.target.value }
    }[event.target.name]()
  }

  handleSubmit = async () => {
    const payload = { email: this.email, password: this.password }

    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    }
    
    const response = await fetch(`${process.env.INFERNO_APP_API}/login`, options)
    const data = await response.json()

    runInAction(() => {
      document.cookie = `token=${data.token}`
      this.authenticated = true
    })
  }
}

export default UserStore