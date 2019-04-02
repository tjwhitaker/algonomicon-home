import { createComponent } from 'inferno-fela'
import Background from './Background'
import Foreground from './Foreground'
import Overlay from './Overlay'
import Starfield from './Starfield'

const NotFound = createComponent(() => ({
  background: 'black',
  position: 'relative',
  width: '100vw',
  height: '100vh'
}))

const NotFoundContainer = () => (
  <NotFound>
    <Starfield />
    <Background />
    <Overlay />
    <Foreground />
  </NotFound>
)

export default NotFoundContainer