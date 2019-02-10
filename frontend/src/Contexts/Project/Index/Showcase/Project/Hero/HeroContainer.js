import { createComponent } from 'inferno-fela'
import ImageContainer from './Image/ImageContainer'

const Hero = createComponent(() => ({
  flex: '0 0 50%',
  paddingRight: '1.5rem',
  position: 'relative'
}))

const HeroContainer = ({ project }) => (
  <Hero>
    <ImageContainer src={project.hero} alt={project.name} />
  </Hero>
)

export default HeroContainer