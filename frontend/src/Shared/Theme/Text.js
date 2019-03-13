import { createComponent } from 'inferno-fela'

// Large titles
export const Paragon = createComponent(() => ({
  fontSize: '2.8rem',
  lineHeight: '3.2rem',
  fontWeight: 'bold'
}))

// Medium titles
export const GreatPrimer = createComponent(() => ({
  fontSize: '2.0rem',
  lineHeight: '2.4rem',
  fontWeight: 'bold'
}))

// Body text
export const Copy = createComponent(() => ({
  fontSize: '1.6rem',
  lineHeight: '2.2rem',
  fontWeight: 'normal'
}))

// Sidebar + Small titles
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
  borderBottom: '1px solid #ccc'
}))