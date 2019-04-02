import { createComponent } from 'inferno-fela'
import astronaut from '../../Static/Assets/images/astronaut.png'

const Background = createComponent(() => ({
  position: 'absolute',
  backgroundImage: 'url(' + astronaut + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%'
}))

export default Background