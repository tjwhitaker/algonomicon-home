import { createComponent } from 'inferno-fela'

const Input = createComponent(() => ({
  display: 'block',
  width: '100%',
  border: '1px solid #ccc',
  marginBottom: '1.5rem',
  padding: '0.5rem'
}), 'input', ['type', 'placeholder'])

export default Input