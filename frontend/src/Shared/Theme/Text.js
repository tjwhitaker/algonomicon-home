import { createComponent } from 'inferno-fela'

// Body text
export const Copy = createComponent(() => ({
  fontSize: '1.6rem',
  lineHeight: '1.8rem',
  fontWeight: 'normal'
}))

// Sidebar titles
export const Pica = createComponent(() => ({
  fontSize: '1.6rem',
  lineHeight: '1.8rem',
  fontWeight: 'bold'
}))

// Timestamps + Meta
export const Brevier = createComponent(() => ({
  fontSize: '1.2rem',
  lineHeight: '1.6rem',
  fontWeight: 'normal',
  color: '#777',
  fontStyle: 'italic'
}))

// Sidebar text
export const LongPrimer = createComponent(() => ({
  fontSize: '1.4rem',
  lineHeight: '1.8rem',
  fontWeight: 'normal',
  color: '#111'
}))

// Sidebar headers
export const Minion = createComponent(() => ({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  lineHeight: '1.6rem',
  color: '#777',
  textTransform: 'uppercase',
  padding: '1.5rem 0',
  borderBottom: '1px solid #aaa'
}))