import { observable, toJS } from 'mobx'
import { observer } from 'inferno-mobx'

const state = observable({
  email: '',
  password: ''
})

const handleInput = (event) => {
  state[event.target.name] = event.target.value
}

const handleClick = async () => {
  const payload = toJS(state)

  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  }
  
  const response = await fetch(`${process.env.INFERNO_APP_API}/login`, options)
  const data = await response.json()

  if (data.token) {
    document.cookie = `token=${data.token}`
  }
}

const LoginContainer = observer(() => (
  <div>
    <div>
      <label>Email</label>
      <input type="text" name="email" value={state.email} onInput={handleInput} />
    </div>

    <div>
      <label>Password</label>
      <input type="password" name="password" value={state.password} onInput={handleInput} />
    </div>

    <button onClick={handleClick}>Submit</button>
  </div>
))

export default LoginContainer