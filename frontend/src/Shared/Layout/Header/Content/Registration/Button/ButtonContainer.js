import { createComponent } from 'inferno-fela'

const Button = createComponent(() => ({
  display: 'block',
  color: 'white',
  background: 'linear-gradient(to left, #FDCA7A, #ED9E6F) repeat',
  backgroundPosition: '0 0',
  backgroundSize: '200% auto',
  paddingTop: '1.8rem',
  paddingRight: '4rem',
  paddingBottom: '1.8rem',
  paddingLeft: '4rem',
  borderRadius: '3px',
  margin: '0 1.5rem',
  fontWeight: 'bold',
  fontSize: '1.3rem',
  textTransform: 'uppercase',
  border: '0',

  ':hover': {
    color: 'white',
    backgroundPosition: '-100px 0'
  }
}), 'button', ['onClick'])

export default Button