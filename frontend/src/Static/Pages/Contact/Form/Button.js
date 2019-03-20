import { createComponent } from 'inferno-fela'
import { LongPrimer } from '../../../../Shared/Theme/Text'

const Button = createComponent(() => ({
  background: 'black',
  color: 'white',
  fontWeight: 'bold',
  display: 'inline-block',
  border: 'none',
  padding: '1rem 1.5rem',
  cursor: 'pointer',
  position: 'absolute',
  bottom: '-5rem'
}), LongPrimer)

export default Button