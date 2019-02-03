import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import { Motion, spring, presets } from 'inferno-motion'
import { WrapperContainer } from '../../Wrapper/WrapperContainer'

const Message = createComponent(({ color }) => ({
  color: color
}))

const onRest = (flash) => {
  if (flash.isOpen) {
    setTimeout(() => {
      flash.close()
    }, 3000)
  }
}

export const FlashContainer = inject('FlashStore')(observer(({ FlashStore }) => (
  <div>
    { FlashStore.message && (
      <Motion 
        defaultStyle={{x: -50}} 
        style={{x: FlashStore.isOpen ? spring(0, presets.stiff) : spring(-50, presets.stiff)}}
        onRest={onRest(FlashStore)}>
        { ({x}) => 
          <WrapperContainer style={{'margin-top': `${x}px`, 'height': '50px'}}> 
            <Message color={FlashStore.color}>{FlashStore.message}</Message>
          </WrapperContainer>
        }
      </Motion>
    )}
  </div>
)))
