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

@inject('ProjectStore')
@observer class ProjectEditContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      slug: '',
      hero: '',
      description: '',
      content: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    const { ProjectStore, match: { params } } = this.props
    const project = ProjectStore.projects.find(project => project.id === params.id)

    if (project) {
      this.setState({
        name: project.name,
        slug: project.slug,
        hero: project.hero,
        description: project.description,
        content: project.content
      })
    }
  }

  handleChange(event) { 
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm() {
    this.props.ProjectStore.putProject({
      id: this.props.match.params.id,
      name: this.state.name,
      slug: this.state.slug,
      hero: this.state.hero,
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

        <Label>Hero</Label>
        <Input name="hero" type="text" value={this.state.hero} onInput={this.handleChange} />

        <Label>Description</Label>
        <Textarea name="description" rows="7" value={this.state.description} onInput={this.handleChange} />

        <Label>Content</Label>
        <Textarea name="content" rows="15" value={this.state.content} onInput={this.handleChange} />

        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default ProjectEditContainer