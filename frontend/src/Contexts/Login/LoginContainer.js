import { inject, observer } from 'inferno-mobx'
import { Redirect, Link } from 'inferno-router'

const LoginContainer = ({ UserStore }) => (
  UserStore.authenticated
  ? <Redirect to="/admin" />
  : <div>
      <div>
        <label>Email</label>
        <input type="text" name="email" value={UserStore.email} onInput={UserStore.handleChange} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" value={UserStore.password} onInput={UserStore.handleChange} />
      </div>

      <button onClick={UserStore.handleSubmit}>Submit</button>
      <Link to="/admin">Admin</Link>
    </div>
)


export default inject('UserStore')(observer(LoginContainer))