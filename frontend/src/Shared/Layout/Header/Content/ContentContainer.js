import { HeadlineContainer } from './Headline/HeadlineContainer'
import { RegistrationContainer } from './Registration/RegistrationContainer'
import { css } from 'glamor'

const content = css({
  position: 'absolute',
  width: '100%',
  left: '1.4rem',
  bottom: '2.0rem',
  paddingRight: '1.4rem'
})

export const ContentContainer = () => (
  <div {...content}>
    <HeadlineContainer />
    <RegistrationContainer />
  </div>
)
