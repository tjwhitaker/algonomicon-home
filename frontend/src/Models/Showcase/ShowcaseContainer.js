import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  container: () => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }),
  preview: () => ({
    marginBottom: '0'
  }),
  title: (props) => ({
    color: props.color
  }),
  description: (props) => ({
    color: props.color,
    marginBottom: '0'
  }),
  gridItem: () => ({
    flex: '0 0 30%',
    padding: '10px 0'
  })
}

const Container = createComponent(styles.container)
const Preview = createComponent(styles.preview, 'img', ['src'])
const Title = createComponent(styles.title, 'h2')
const Description = createComponent(styles.description, 'p')
const GridItem = createComponent(styles.gridItem)

@inject('ModelStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    this.props.ModelStore.fetchModels()
  }

  render() {
    return (
      <Container>
        {this.props.ModelStore.models.map((model, index) => 
            <GridItem>
              <Preview src={model.preview + "?" + index} alt={model.name}/>
              <Title>{model.name}</Title>
              <Description>{model.description}</Description>
            </GridItem>
        )}
      </Container>
    )
  }
}

export default ShowcaseContainer