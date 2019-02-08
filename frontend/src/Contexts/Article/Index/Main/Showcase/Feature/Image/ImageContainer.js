import { createComponent } from 'inferno-fela'
import Image from './Image'

const Container = createComponent(() => ({
  position:'relative',
  width: '100%',
  paddingBottom: '50%',
  height: '0',
  background: '#eee'
}))

const ImageContainer = ({src, alt}) => (
  <Container>
    <Image src={src} alt={alt} />
  </Container>
)

export default ImageContainer