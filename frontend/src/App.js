import { BrowserRouter } from 'inferno-router'
import { Provider as StoreProvider } from 'inferno-mobx'
import { Provider as RenderProvider } from 'inferno-fela'
import { createRenderer } from 'fela'
import GlobalStyles from './Static/Assets/GlobalStyles.css'
import Routes from './Config/Routes'
import Stores from './Config/Stores'
import './Static/Assets/AppStyles.scss'

const renderer = createRenderer()
renderer.renderStatic(GlobalStyles.toString())

const App = () => (
  <RenderProvider renderer={renderer}>
    <StoreProvider {...Stores}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </StoreProvider>
  </RenderProvider>
)

export default App