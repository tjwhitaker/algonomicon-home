import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'

const styles = {
  wrapper: () => ({
    maxWidth: '120rem',
    margin: '0 auto',
    padding: '1.4rem',
    position: 'relative',
    height: '100%'
  }),
}

const Wrapper = createComponent(styles.wrapper)

class WrapperContainer extends Component {
  render (props) {
    return (
      <Wrapper {...props}>{this.props.children}</Wrapper>
    )
  }
}

export default WrapperContainer