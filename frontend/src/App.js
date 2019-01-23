import { Component } from 'inferno'
import { BrowserRouter } from 'inferno-router'
import { Provider as StoreProvider } from 'inferno-mobx'
import { Provider as RenderProvider } from 'inferno-fela'
import { ThemeProvider } from 'inferno-fela'
import { createRenderer } from 'fela'
import GlobalStyles from './Static/Assets/GlobalStyles.css'
import Routes from './Config/Routes'
import Stores from './Config/Stores'
import './Static/Assets/AppStyles.scss'

const renderer = createRenderer()
renderer.renderStatic(GlobalStyles.toString())

const theme = {
  hufflepuff: 'rgb(0, 193, 182)',
  ravenclaw: 'rgb(19, 110, 181)',
  gryffindor: '#FDCA7A'
}

class App extends Component {
  render() {
    return (
      <RenderProvider renderer={renderer}>
        <ThemeProvider theme={theme}>
          <StoreProvider {...Stores}>
            <BrowserRouter>
              {Routes}
            </BrowserRouter>
          </StoreProvider>
        </ThemeProvider> 
      </RenderProvider>
    )
  }
}

export default App