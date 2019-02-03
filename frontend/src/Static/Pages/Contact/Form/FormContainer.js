import { createComponent } from 'inferno-fela'
import { Label, Input, TextArea } from '../../../../Shared/Theme/Forms'

const Form = createComponent(() => ({
  flex: '0 0 50%',
  paddingRight: '0.7rem'
}))

export const FormContainer = () => (
  <Form>
    <div>
      <Label>Name</Label>
      <Input type="text" />
    </div>

    <div>
      <Label>Email</Label>
      <Input type="email" />
    </div>

    <div>
      <Label>Content</Label>
      <TextArea rows="10" />
    </div>
  </Form>
)