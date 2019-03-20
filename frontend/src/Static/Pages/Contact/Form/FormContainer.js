import { createComponent } from 'inferno-fela'
import Button from './Button'
import FieldGroup from './FieldGroup'
import Input from './Input'
import TextArea from './TextArea'

const Form = createComponent(() => ({
  flex: '0 0 50%',
  paddingRight: '0.7rem',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
}))

const FormContainer = () => (
  <Form>
    <FieldGroup flex="0">
      <Input type="text" placeholder="Name" />
    </FieldGroup>

    <FieldGroup flex="0">
      <Input type="email" placeholder="Email" />
    </FieldGroup>

    <FieldGroup flex="1">
      <TextArea placeholder="Content" />
    </FieldGroup>

    <Button>Send</Button>
  </Form>
)

export default FormContainer