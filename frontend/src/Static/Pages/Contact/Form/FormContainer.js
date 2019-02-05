import { css } from 'glamor'

const flex = css({
  flex: '0 0 50%',
  paddingRight: '0.7rem'
})

const FormContainer = () => (
  <div {...flex}>
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
  </div>
)

export default FormContainer