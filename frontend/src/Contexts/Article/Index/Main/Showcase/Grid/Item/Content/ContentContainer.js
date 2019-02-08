import { createComponent } from 'inferno-fela'
import Title from './Title'
import Description from './Description'

const Content = createComponent(() => ({
  marginTop: '0.5rem'
}))

const ContentContainer = ({ name, description }) => (
  <Content>
    <Title>{name}</Title>
    <Description>{description}...</Description>
  </Content>
)

export default ContentContainer