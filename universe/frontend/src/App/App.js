import { Component } from 'inferno'
import { BrowserRouter } from 'inferno-router'
import { ThemeProvider } from 'inferno-fela'
import Routes from './Routes'
import './AppStyles.scss'

const theme = {
  hufflepuff: '#9370DB',
  ravenclaw: '#5F527A',
  gryffindor: '#FDCA7A'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {Routes}
        </BrowserRouter>
      </ThemeProvider> 
    )
  }
}

export default App