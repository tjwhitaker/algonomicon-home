import { createComponent } from 'inferno-fela'
import { LongPrimer } from '../../../../../../../Shared/Theme/Text'

const Option = createComponent(() => ({
  display: 'block',
  color:'#aaa',
  fontWeight: 'bold',
  marginBottom: '0.2rem'
}), LongPrimer)

export default Option