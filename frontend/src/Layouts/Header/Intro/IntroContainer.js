import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject } from 'inferno-mobx'

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
    fontSize: '1.4rem',
    marginBottom: '1.4rem'
  }),
  title: () => ({
    color: 'white',
    marginBottom: '0'
  }),
  subscribeContainer: () => ({
    display: 'flex',
    position: 'relative'
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
    width: '3rem',
    lineHeight: '1',
    color: '#aaa'
  }),
  input: () => ({
    width: '100%',
    paddingTop: '1.8rem',
    paddingBottom: '1.8rem',
    paddingLeft: '6rem',
    borderRadius: '3px',
    border: 0,

    '&:invalid': {
      border: 'none'
    }
  }),
  button: (props) => ({
    display: 'block',
    color: 'white',
    background: 'linear-gradient(to left, #FDCA7A, #ED9E6F) repeat',
    backgroundPosition: '0 0',
    backgroundSize: '200% auto',
    paddingTop: '1.8rem',
    paddingRight: '4rem',
    paddingBottom: '1.8rem',
    paddingLeft: '4rem',
    borderRadius: '3px',
    margin: '0 1.4rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    border: '0',

    ':hover': {
      color: 'white',
      backgroundPosition: '-100px 0'
    }
  })
}

const Container = createComponent(styles.container)
const Tagline = createComponent(styles.tagline, 'h2')
const Title = createComponent(styles.title, 'h1')
const SubscribeContainer = createComponent(styles.subscribeContainer)
const InputContainer = createComponent(styles.inputContainer)
const Icon = createComponent(styles.icon)
const Input = createComponent(styles.input, 'input', ['type', 'value', 'onInput', 'placeholder'])
const Button = createComponent(styles.button, 'button', ['onclick'])

@inject('FlashStore')
class IntroContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    let data = {email: this.state.email}

    if (this.validateEmail(data.email)) {
      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }

      fetch('http://localhost:8000/users', options)
        .then(response => {
          this.props.FlashStore.message = '<email> subscribed!'
          this.props.FlashStore.color = 'lime'
        })
        .catch(error => {
          this.props.FlashStore.message = error
          this.props.FlashStore.color = 'red'
        })
    }
    else {
      this.props.FlashStore.message = '<email> doesn\'t validate'
      this.props.FlashStore.color = 'red'
    }
    
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  validateEmail(email) {
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
  }

  render() {
    return (
      <Container>
        <Title>The Place for Machine Learning</Title>
        <Tagline>Still under construction. Thanks for bearing with us! Sign up for early access.</Tagline>
        <SubscribeContainer>
          <InputContainer>
            <Icon>
              <svg style={{display: 'block'}} aria-hidden="true" data-prefix="fas" data-icon="user-astronaut" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user-astronaut fa-w-14 fa-3x"><path fill="currentColor" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z" class=""></path></svg>
            </Icon>
            <Input type="email" value={this.state.email} onInput={this.handleChange} placeholder="example@algonomicon.com" />
          </InputContainer>
          <Button onclick={this.handleSubmit}>Sign Up!</Button>
        </SubscribeContainer>
      </Container>
    )
  }
}

export default IntroContainer
