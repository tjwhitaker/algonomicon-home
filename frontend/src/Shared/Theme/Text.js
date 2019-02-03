import { createComponent } from 'inferno-fela'

export const Caption = createComponent(() => ({
  fontStyle: 'italic',
  marginBottom: '1.4rem'
}))

export const Paragraph = createComponent(() => ({
  fontSize: '1.4rem',
  color: '#111',
  marginBottom: '1.4rem'
}))

export const Quote = createComponent(() => ({
  borderLeft: '5px solid #ccc',
  paddingLeft: '1.4rem',
  paddingTop: '0.7rem',
  paddingBottom: '0.7rem',
  marginBottom: '1.4rem'
}))