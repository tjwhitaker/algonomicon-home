import { inject, observer } from 'inferno-mobx'
import { Motion, spring, presets } from 'inferno-motion'
import WrapperContainer from '../../../Wrapper/WrapperContainer'

const onRest = (flash) => {
  if (flash.isOpen) {
    setTimeout(() => {
      flash.close()
    }, 3000)
  }
}

const FlashContainer = ({ FlashStore }) => (
  <div>
    { FlashStore.message && (
      <Motion 
        defaultStyle={{x: -50}} 
        style={{x: FlashStore.isOpen ? spring(0, presets.stiff) : spring(-50, presets.stiff)}}
        onRest={onRest(FlashStore)}>
        { ({x}) => 
          <WrapperContainer style={{'margin-top': `${x}px`, 'height': '50px'}}> 
            <p style={{color: FlashStore.color}}>{FlashStore.message}</p>
          </WrapperContainer>
        }
      </Motion>
    )}
  </div>
)

export default inject('FlashStore')(observer(FlashContainer))