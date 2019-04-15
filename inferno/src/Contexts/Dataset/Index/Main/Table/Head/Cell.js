import { createComponent } from 'inferno-fela'
import { Minion } from '../../../../../../Shared/Theme/Text'

const Cell = createComponent(() => ({
  padding: '1.5rem 0.7rem',
  textAlign: 'left',
  display: 'table-cell',

  '&:first-child': {
    paddingLeft: '0'
  },
  '&:last-child': {
    paddingRight: '0'
  }
}), Minion)

export default Cell