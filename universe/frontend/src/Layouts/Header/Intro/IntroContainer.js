import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'

const styles = {
  container: () => ({
    position: 'absolute',
    width: '100%',
    left: '1.4rem',
    bottom: '2.8rem',
    paddingRight: '1.4rem'
  }),
  tagline: () => ({
    color: 'white',
    fontSize: '1.4rem'
  }),
  title: () => ({
    color: 'white',
    marginBottom: '1.4rem'
  }),
  searchContainer: () => ({
    display: 'flex'
  }),
  inputContainer: () => ({
    position: 'relative',
    width: '100%',
    maxWidth: '400px'
  }),
  icon: () => ({
    position: 'absolute',
    left: '1.4rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '2.5rem',
    lineHeight: '1',
    color: '#aaa'
  }),
  input: () => ({
    width: '100%',
    padding: '2rem',
    paddingLeft: '5.2rem',
    borderRadius: '3px',
    border: 0
  }),
  button: (props) => ({
    display: 'block',
    color: 'white',
    background: 'linear-gradient(to left, #FDCA7A, #ED9E6F) repeat',
    backgroundPosition: '0 0',
    backgroundSize: '200% auto',
    padding: '2rem 4rem',
    borderRadius: '3px',
    margin: '0 1.4rem',
    fontWeight: 'bold',

    ':hover': {
      color: 'white',
      backgroundPosition: '-100px 0'
    }
  })
}

const Container = createComponent(styles.container)
const Tagline = createComponent(styles.tagline, 'h2')
const Title = createComponent(styles.title, 'h1')
const SearchContainer = createComponent(styles.searchContainer)
const InputContainer = createComponent(styles.inputContainer)
const Icon = createComponent(styles.icon)
const Input = createComponent(styles.input, 'input', ['type', 'placeholder'])
const Button = createComponent(styles.button, Link, ['to'])

class IntroContainer extends Component {
  render() {
    return (
      <Container>
        <Tagline>Finding Patterns in a Chaotic World</Tagline>
        <Title>Machine Learning for Fun and Profit</Title>
        <SearchContainer>
          <InputContainer>
            <Icon>
              <svg style="display:block" aria-hidden="true" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-users fa-w-20"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" class=""></path></svg>
            </Icon>
            <Input type="text" placeholder="Enter your email for a short weekly ML newsletter" />
          </InputContainer>
          <Button to="/search">Subscribe</Button>
        </SearchContainer>
      </Container>
    )
  }
}

export default IntroContainer