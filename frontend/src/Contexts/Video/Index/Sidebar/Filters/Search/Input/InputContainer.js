import { createComponent } from 'inferno-fela'
import Icon from './Icon'
import Input from './Input'

const Container = createComponent(() => ({
  position: 'relative',
  width: '100%'
}))

const InputContainer = () => (  
  <Container>
    <Icon />
    <Input type="text" placeholder="Articles, Datasets, Research and more..." />
  </Container>
)

export default InputContainer