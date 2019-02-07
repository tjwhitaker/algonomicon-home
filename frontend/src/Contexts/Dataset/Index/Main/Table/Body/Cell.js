import { createComponent } from 'inferno-fela'
import { LongPrimer } from '../../../../../../Shared/Theme/Text'

const Cell = createComponent(() => ({
    padding: '1.5rem 0.7rem',
    color: '#111',
    verticalAlign: 'middle',
    display: 'table-cell',

    '&:first-child': {
      paddingLeft: '0'
    },
    '&:last-child': {
      paddingRight: '0'
    }
}), LongPrimer)

export default Cell