import { Component } from 'inferno'
import { BrowserRouter } from 'inferno-router'
import Routes from './Routes'
import './AppStyles.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {Routes}
      </BrowserRouter> 
    )
  }
}

export default App