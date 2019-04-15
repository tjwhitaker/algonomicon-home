import { createComponent } from 'inferno-fela'

const Input = createComponent(() => ({
  width: '100%',
  paddingTop: '1.8rem',
  paddingBottom: '1.8rem',
  paddingLeft: '6rem',
  marginBottom: '0',
  borderRadius: '3px',
  border: 0,

  '&:invalid': {
    border: 'none',
    outline: 'none',
    boxShadow: 'none'
  }
}), 'input', ['type', 'value', 'onInput', 'placeholder'])

export default Input