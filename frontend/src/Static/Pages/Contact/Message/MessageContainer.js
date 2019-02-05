import { css } from 'glamor'

const message = css({
  flex: '0 0 100%'
})

const MessageContainer = () => (
  <div {...message}>
    <h1>Contact</h1>
    <p>Thanks for your interest! I'd love to talk more if you have any questions, concerns or ideas. Feel free to use the form to email me, or get in touch through one of these other means.</p>
  </div>
)

export default MessageContainer