import { createComponent } from 'inferno-fela'
import Icon from './Icon'
import Input from './Input'

const Container = createComponent(() => ({
  position: 'relative',
  width: '100%',
  maxWidth: '400px'
}))

const InputContainer = ({ value, onInput }) => (
  <Container>
    <Icon />
    <Input type="email" value={value} onInput={onInput} placeholder="example@algonomicon.com" />
  </Container>
) 

export default InputContainer