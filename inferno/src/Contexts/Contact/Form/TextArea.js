import { createComponent } from 'inferno-fela'

const Textarea = createComponent(() => ({
  display: 'block',
  width: '100%',
  border: '1px solid #ccc',
  marginBottom: '1.5rem',
  padding: '0.5rem',
  height: '100%'
}), 'textarea', ['placeholder'])

export default Textarea