import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import WrapperContainer from '../../Shared/Wrapper/WrapperContainer'

const styles = {
  message: (props) => ({
    color: props.color
  })
}

const Message = createComponent(styles.message)

@inject('FlashStore')
@observer class FlashContainer extends Component {
  render() {
    return (
      <>
        { this.props.FlashStore.message && (
          <WrapperContainer>
            <Message color={this.props.FlashStore.color}>{this.props.FlashStore.message}</Message>
          </WrapperContainer>
        )}
      </>
    )
  }
}

export default FlashContainer