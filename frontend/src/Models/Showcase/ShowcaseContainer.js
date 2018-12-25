import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  grid: () => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }),
  model: () => ({
    display: 'block',
    borderRight: '1px solid #ccc',

    '&:nth-child(even)': {
      borderRight: 0
    }
  }),
  content: (props) => ({
    paddingBottom: '1.4rem',
    borderTop: props.borderTop,
    paddingTop: props.paddingTop,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight
  }),
  title: () => ({
  }),
  description: () => ({
    marginBottom: '0'
  })
}

const Grid = createComponent(styles.grid)
const Model = createComponent(styles.model)
const Content = createComponent(styles.content)
const Title = createComponent(styles.title, 'h3')
const Description = createComponent(styles.description, 'p')

@inject('ModelStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    this.props.ModelStore.fetchModels()
  }

  render() {
    return (
      <Grid>
        {this.props.ModelStore.models.map((model, index) => (
          <Model>
            <Content borderTop={index < 2 ? 0 : '1px solid #ccc'}
                     paddingTop={index < 2 ? 0 : '1.4rem'}
                     marginLeft={index % 2 === 0 ? 0 : '1.4rem'}
                     marginRight={index % 2 === 1 ? 0 : '1.4rem'}>
              <Title>{model.name}</Title>
              <Description>{model.description.substring(0, 500)}...</Description>
            </Content>
          </Model>
        ))}
      </Grid>
    )
  }
}

export default ShowcaseContainer