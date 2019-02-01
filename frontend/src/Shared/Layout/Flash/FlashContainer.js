import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import { Motion, spring, presets } from 'inferno-motion'
import WrapperContainer from '../../Wrapper/WrapperContainer'

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
      this.props.FlashStore.clearFlash()
      this.setState({open: true})
    }
  }

  render() {
    return (
      <div>
        { this.props.FlashStore.message && (
          <Motion 
            defaultStyle={{x: -50}} 
            style={{x: this.state.open ? spring(0, presets.stiff) : spring(-50, presets.stiff)}}
            onRest={this.onRest}>
            { ({x}) => 
              <WrapperContainer style={{'margin-top': `${x}px`, 'height': '50px'}}> 
                <Message color={this.props.FlashStore.color}>{this.props.FlashStore.message}</Message>
              </WrapperContainer>
            }
          </Motion>
        )}
      </div>
    )
  }
}

export default FlashContainer