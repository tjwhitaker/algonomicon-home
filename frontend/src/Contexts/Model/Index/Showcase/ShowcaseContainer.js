import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  model: (props) => ({
    display: 'block',
    padding: '1.4rem 0',
    borderTop: props.borderTop,

    '&:first-child': {
      paddingTop: '0'
    }
  }),
  title: () => ({
  }),
  description: () => ({
    marginBottom: '0',
    fontWeight: 'normal',
    color: 'black'
  })
}

const Model = createComponent(styles.model)
const Title = createComponent(styles.title, 'h3')
const Description = createComponent(styles.description, 'p')

@inject('ModelStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    if (this.props.ModelStore.models.length === 0) {
      this.props.ModelStore.fetchModels()
    }
  }

  render() {
    return (
      <>
        {this.props.ModelStore.models.map((model, index) => (
          <Model borderTop={index === 0 ? 0 : '1px solid #ccc'}>
            <Link to={'/models/' + model.id}>
              <Title>{model.name}</Title>
              <Description>{model.description.substring(0, 500)}...</Description>
            </Link>
          </Model>
        ))}
      </>
    )
  }
}

export default ShowcaseContainer