import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'

const styles = {
  wrapper: () => ({
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '1.4rem'
  }),
}

const Wrapper = createComponent(styles.wrapper)

class WrapperContainer extends Component {
  render () {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    )
  }
}

export default WrapperContainer