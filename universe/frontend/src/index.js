import { render } from 'inferno'
import { createRenderer } from 'fela'
import { Provider } from 'inferno-fela'
import App from './App/App'
import GlobalStyles from './App/GlobalStyles.css'
import * as serviceWorker from './serviceWorker'

const renderer = createRenderer()
renderer.renderStatic(GlobalStyles.toString())

render((
  <Provider renderer={renderer}>
    <App />
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
