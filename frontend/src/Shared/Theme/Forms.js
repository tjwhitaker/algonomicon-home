import { createComponent } from 'inferno-fela'

const Label = createComponent(() => ({
  display: 'block'
}), 'label')

const Input = createComponent(() => ({
  width: '100%',
  border: '1px solid #ccc',
  padding: '0.7rem',
  marginBottom: '1.4rem'
}), 'input', ['type'])

const TextArea = createComponent(() => ({
  width: '100%',
  marginBottom: 0,
  border: '1px solid #ccc',
  padding: '0.7em'
}), 'textarea', ['rows'])

export { Label, Input, TextArea }