import { css } from 'glamor'
import { trafalgar, bodyCopy } from '../../../../Theme/Text'

const container = css({
  marginBottom: '0.8rem'
})

const headline = css({
  color: 'white',
  marginBottom: 0
})

const HeadlineContainer = () => (
  <div {...container}>
    <h1 {...css(headline, trafalgar)}>Machine Learning Algorithms</h1>
    <h2 {...css(headline, bodyCopy)}>Still under construction. Thanks for bearing with us! Sign up for early access.</h2>
  </div>
)

export default HeadlineContainer