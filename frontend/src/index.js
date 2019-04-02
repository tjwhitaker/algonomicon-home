import { render } from 'inferno'
import { BrowserRouter } from 'inferno-router'
import { Provider as StoreProvider } from 'inferno-mobx'
import { Provider as RenderProvider } from 'inferno-fela'
import { createRenderer } from 'fela'
import GlobalStyles from './Static/Assets/GlobalStyles.css'
import Routes from './Config/Routes'
import Stores from './Config/Stores'
import './Static/Assets/AppStyles.scss'
import * as serviceWorker from './serviceWorker'


const renderer = createRenderer()
renderer.renderStatic(GlobalStyles.toString())

render((
  <RenderProvider renderer={renderer}>
    <StoreProvider {...Stores}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </StoreProvider>
  </RenderProvider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
