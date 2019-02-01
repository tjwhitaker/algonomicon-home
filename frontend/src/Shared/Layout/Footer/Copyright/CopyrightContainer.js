import { createComponent } from 'inferno-fela'

const Copyright = createComponent(() => ({
  color: '#ccc',
  margin: 0
}), 'p')

export const CopyrightContainer = () => (
  <Copyright>&copy; Algonomicon LLC 2019</Copyright>
)
