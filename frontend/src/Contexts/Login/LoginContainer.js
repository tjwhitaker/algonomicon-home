import { inject, observer } from 'inferno-mobx'

const LoginContainer = ({ UserStore }) => {
  return (
    <div>
      <div>
        <label>Email</label>
        <input type="text" name="email" value={UserStore.email} onInput={UserStore.handleChange} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" value={UserStore.password} onInput={UserStore.handleChange} />
      </div>

      <button onClick={UserStore.handleSubmit}>Submit</button>
    </div>
  )
}


export default inject('UserStore')(observer(LoginContainer))