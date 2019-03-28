import { createComponent } from 'inferno-fela'

const Overlay = createComponent(() => ({
  position: 'absolute',
  background: 'rgba(0,0,0,0.7)',
  height: '100%',
  width: '100%'
}))

export default Overlay