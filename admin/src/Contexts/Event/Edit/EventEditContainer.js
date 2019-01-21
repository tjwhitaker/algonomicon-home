import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  label: () => ({
    display: 'block'
  }),
  input: () => ({
    display: 'block',
    border: '1px solid #ccc',
    padding: '0.7rem',
    width: '100%',
    marginBottom: '1.4rem'
  }),
  textarea: () => ({
    display: 'block',
    border: '1px solid #ccc',
    padding: '0.7rem',
    width: '100%',
    marginBottom: '1.4rem'
  })
}

const Label = createComponent(styles.label, 'label')
const Input = createComponent(styles.input, 'input', ['name', 'type', 'value', 'onInput'])
const Textarea = createComponent(styles.textarea, 'textarea', ['name', 'rows', 'value', 'onInput'])

@inject('EventStore')
@observer class EventEditContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      slug: '',
      location: '',
      date: '',
      content: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    const { EventStore, match: { params } } = this.props
    const event = EventStore.events.find(event => event.id === params.id)

    if (event) {
      this.setState({
        name: event.name,
        slug: event.slug,
        location: event.location,
        date: event.date,
        content: event.content
      })
    }
  }

  handleChange(event) { 
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm() {
    this.props.EventStore.putEvent({
      id: this.props.match.params.id,
      name: this.state.name,
      slug: this.state.slug,
      location: this.state.location,
      date: this.state.date,
      content: this.state.content
    })
  }

  render() {
    return (
      <div>
        <Label>Name</Label>
        <Input name="name" type="text" value={this.state.name} onInput={this.handleChange} />

        <Label>Slug</Label>
        <Input name="slug" type="text" value={this.state.slug} onInput={this.handleChange} />

        <Label>Hero</Label>
        <Input name="location" type="text" value={this.state.location} onInput={this.handleChange} />

        <Label>Date</Label>
        <Input name="date" value={this.state.date} onInput={this.handleChange} />

        <Label>Content</Label>
        <Textarea name="content" rows="15" value={this.state.content} onInput={this.handleChange} />

        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default EventEditContainer