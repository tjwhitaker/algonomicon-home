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

@inject('PaperStore')
@observer class PaperEditContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      slug: '',
      abstract: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount() {
    const { PaperStore, match: { params } } = this.props
    const paper = PaperStore.papers.find(paper => paper.id === params.id)

    if (paper) {
      this.setState({
        name: paper.name,
        slug: paper.slug,
        abstract: paper.abstract
      })
    }
  }

  handleChange(event) { 
    this.setState({[event.target.name]: event.target.value})
  }

  submitForm() {
    this.props.PaperStore.putPaper({
      id: this.props.match.params.id,
      name: this.state.name,
      slug: this.state.slug,
      abstract: this.state.abstract
    })
  }

  render() {
    return (
      <div>
        <Label>Name</Label>
        <Input name="name" type="text" value={this.state.name} onInput={this.handleChange} />

        <Label>Slug</Label>
        <Input name="slug" type="text" value={this.state.slug} onInput={this.handleChange} />

        <Label>Abstract</Label>
        <Textarea name="abstract" rows="15" value={this.state.content} onInput={this.handleChange} />

        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default PaperEditContainer