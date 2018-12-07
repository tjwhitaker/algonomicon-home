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
  constructor() {
    super()

    this.state = {open: true}
    this.onRest = this.onRest.bind(this)
  }

  onRest() {
    if (this.state.open) {
      setTimeout(() => {
        this.setState({open: false})
      }, 3000)
    }
    else {
      this.props.FlashStore.setFlash('', '')
      this.setState({open: true})
    }
  }

  render() {
    return (
      <>
        { this.props.FlashStore.message && (
          <Motion 
            defaultStyle={{x: -50}} 
            style={{x: this.state.open ? spring(0) : spring(-50)}}
            onRest={this.onRest}>
            { ({x}) => 
              <WrapperContainer style={{'margin-top': `${x}px`, 'height': '50px'}}> 
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