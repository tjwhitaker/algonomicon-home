import { createComponent } from 'inferno-fela'
import Description from './Description'
import Title from './Title'

const Content = createComponent(() => ({
  flex: '0 0 50%',
  paddingLeft: '1.5rem'
}))

const ContentContainer = ({ project }) => (
  <Content>
    <Title>{project.name}</Title>
    <Description>{project.description}</Description>
  </Content>
)

export default ContentContainer