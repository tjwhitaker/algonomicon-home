import { css } from 'glamor'

const copyright = css({
  color: '#ccc',
  margin: 0
})

const CopyrightContainer = () => (
  <p {...copyright}>&copy; Algonomicon LLC 2019</p>
)

export default CopyrightContainer