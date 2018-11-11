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
    width: '2rem',
    lineHeight: '1',
    color: '#aaa'
  }),
  input: () => ({
    width: '100%',
    padding: '2rem',
    paddingLeft: '5rem',
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
        <Title>The Open Source ML Community</Title>
        <SearchContainer>
          <InputContainer>
            <Icon>
              <svg aria-hidden="true" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            </Icon>
            <Input type="text" placeholder="Articles, Datasets, Research and more..." />
          </InputContainer>
          <Button to="/search">Search</Button>
        </SearchContainer>
      </Container>
    )
  }
}

export default IntroContainer