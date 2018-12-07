import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import { Motion, spring } from 'inferno-motion'
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
          <Motion 
            defaultStyle={{x: -50}} 
            style={{x: spring(0)}}>
            { ({x}) => 
              <WrapperContainer style={{'margin-top': `${x}px`}}> 
                <Message color={this.props.FlashStore.color}>{this.props.FlashStore.message}</Message>
              </WrapperContainer>
            }
          </Motion>
        )}
      </>
    )
  }
}

export default FlashContainer