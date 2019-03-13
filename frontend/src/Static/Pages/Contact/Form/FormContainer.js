import { createComponent } from 'inferno-fela'

const Form = createComponent(() => ({
  flex: '0 0 50%',
  paddingRight: '0.7rem'
}))

const FormContainer = () => (
  <Form>
    <div>
      <label>Name</label>
      <input type="text" />
    </div>

    <div>
      <label>Email</label>
      <input type="email" />
    </div>

    <div>
      <label>Content</label>
      <textarea rows="10" />
    </div>
  </Form>
)

export default FormContainer