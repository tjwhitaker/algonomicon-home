import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import LogoContainer from './Logo/LogoContainer'
import bg from './nebula.jpg'

const styles = {
  header: () => ({
    backgroundImage: 'url(' + bg + ')',
    backgroundSize: 'cover',
    padding: '0.7rem 1.4rem'
  })
}

const Header = createComponent(styles.header)

class HeaderContainer extends Component {
  render() {
    return (
      <Header>
        <LogoContainer />
      </Header>
    )
  }
}

export default HeaderContainer