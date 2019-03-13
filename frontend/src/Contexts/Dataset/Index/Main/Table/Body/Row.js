import { createComponent } from 'inferno-fela'
import { Link } from 'inferno-router'

const Row = createComponent(() => ({
  borderBottom: '1px solid #ccc',
  display: 'table-row'
}), Link, ['to'])

export default Row