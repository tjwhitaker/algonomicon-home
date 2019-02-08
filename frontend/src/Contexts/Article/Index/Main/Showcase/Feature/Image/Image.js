import { createComponent } from 'inferno-fela'

const Image = createComponent(() => ({
  position: 'absolute',
  height:'100%',
  width: '100%',
  left: '0'
}), 'img', ['src', 'alt'])

export default Image