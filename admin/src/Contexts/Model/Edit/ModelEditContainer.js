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

@inject('ModelStore')
@observer class ModelEditContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      slug: '',
      description: '',
      content: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    const { ModelStore, match: { params } } = this.props
    const model = ModelStore.models.find(model => model.id === params.id)

    if (model) {
      this.setState({
        name: model.name,
        slug: model.slug,
        description: model.description,
        content: model.content
      })
    }
  }

  handleChange(event) { 
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm() {
    this.props.ModelStore.putModel({
      id: this.props.match.params.id,
      name: this.state.name,
      slug: this.state.slug,
      description: this.state.description,
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

        <Label>Description</Label>
        <Textarea name="description" rows="7" value={this.state.description} onInput={this.handleChange} />

        <Label>Content</Label>
        <Textarea name="content" rows="15" value={this.state.content} onInput={this.handleChange} />

        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default ModelEditContainer 