import { createComponent } from 'inferno-fela'
import Headline from './Headline'
import Tagline from './Tagline'

const Screamer = createComponent(() => ({
  marginBottom: '1rem'
}))

const ScreamerContainer = () => (
  <Screamer>
    <Headline>Code, Math, and Machine Learning</Headline>
    <Tagline>Still under construction. Thanks for bearing with us! Sign up for updates.</Tagline>
  </Screamer>
)

export default ScreamerContainer