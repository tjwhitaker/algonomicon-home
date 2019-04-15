import { createComponent } from 'inferno-fela'

const Wrapper = createComponent(() => ({
  maxWidth: '110rem',
  margin: '0 auto',
  padding: '1.5rem',
  position: 'relative',
  height: '100%'
}))

const WrapperContainer = (props) => (
  <Wrapper {...props}>{props.children}</Wrapper>
)

export default WrapperContainer