import { createComponent } from 'inferno-fela'

const Headline = createComponent(() => ({
  color: 'white',
  marginBottom: '0'
}), 'h1')

const Tagline = createComponent(() => ({
  color: 'white',
  fontSize: '1.4rem'
}), 'h2')

export { Headline, Tagline }