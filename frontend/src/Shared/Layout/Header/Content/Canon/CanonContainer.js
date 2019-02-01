import { Headline } from '../../../../Theme/Headings'
import { Tagline } from '../../../../Theme/Headings'
import { createComponent } from 'inferno-fela'

const Canon = createComponent(() => ({
  marginBottom: '1.4rem'
}))

const CanonContainer = () => (
  <Canon>
    <Headline>Machine Learning Algorithms</Headline>
    <Tagline>Still under construction. Thanks for bearing with us! Sign up for early access.</Tagline>
  </Canon>
)

export default CanonContainer