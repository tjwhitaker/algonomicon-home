import { createComponent } from 'inferno-fela'

const Input = createComponent(() => ({
  width: '100%',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingRight: '1rem',
  paddingLeft: '4rem',
  border: '1px solid #ccc',
  fontSize: '1.4rem',
  lineHeight: '1.8rem'
}), 'input', ['type', 'placeholder', 'value'])

export default Input