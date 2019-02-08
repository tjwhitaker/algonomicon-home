import { createComponent } from 'inferno-fela'
import Title from './Title'
import Description from './Description'

const Content = createComponent(() => ({
  position: 'absolute',
  bottom: '1.5rem',
  left: '1.5rem',
  padding: '1.5rem',
  background: '#111',
  maxWidth:  '50%'
}))

const ContentContainer = ({ name, description }) => (
  <Content>
    <Title>{name}</Title>
    <Description>{description}...</Description>
  </Content>
)

export default ContentContainer