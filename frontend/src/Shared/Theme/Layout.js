import { css } from 'glamor'

const grid = css({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
})

const main = css({
  borderRight: '1px solid #ccc',
  paddingRight: '1.5rem'
})

const sidebar = css({
  paddingLeft: '1.5rem'
})

export { grid, main, sidebar }