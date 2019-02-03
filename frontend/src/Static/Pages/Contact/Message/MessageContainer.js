import { createComponent } from 'inferno-fela'

const Message = createComponent(() => ({
  flex: '0 0 100%'
}))

export const MessageContainer = () => (
  <Message>
    <h1>Contact</h1>
    <p>Thanks for your interest! I'd love to talk more if you have any questions, concerns or ideas. Feel free to use the form to email me, or get in touch through one of these other means.</p>
  </Message>
)