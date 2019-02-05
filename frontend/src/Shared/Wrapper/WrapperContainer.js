import { css } from 'glamor'

const wrapper = css({
  maxWidth: '110rem',
  margin: '0 auto',
  padding: '1.5rem',
  position: 'relative',
  height: '100%'
})

const WrapperContainer = (props) => (
  <div {...wrapper} {...props}>{props.children}</div>
)

export default WrapperContainer