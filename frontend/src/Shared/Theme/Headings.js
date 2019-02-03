import { createComponent } from 'inferno-fela'

export const Headline = createComponent(() => ({
  color: 'white',
  marginBottom: '0'
}), 'h1')

export const Tagline = createComponent(() => ({
  color: 'white',
  fontSize: '1.4rem'
}), 'h2')

export const Title = createComponent(() => ({
  color: '#111',
  fontSize: '2.4rem'
}), 'h1')

export const Subtitle = createComponent(() => ({
  color: '#111',
  fontSize: '1.6rem'
}), 'h2')

export const Minion = createComponent(() => ({
  color: '#777',
  borderBottom: '1px solid #ccc',
  fontSize: '1.2rem',
  padding: '1.4rem 0',
  lineHeight: '1',
  display: 'block'
}), 'h3')