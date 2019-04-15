import { createComponent } from 'inferno-fela'
import { LongPrimer } from '../../../../../../Shared/Theme/Text'

const Tag = createComponent(() => ({
  display: 'inline-block',
  marginRight: '1.5rem',
  color: '#aaa',
  fontWeight: 'bold'
}), LongPrimer)

export default Tag