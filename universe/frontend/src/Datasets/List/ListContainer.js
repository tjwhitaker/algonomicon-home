import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  title: () => ({}),
  description: () => ({})
}

@inject('DatasetStore')
@observer class ListContainer extends Component {
  componentDidMount() {
    this.props.DatasetStore.fetchDatasets()
  }

  render() {
    return (
      <>
        {this.props.DatasetStore.datasets.map(dataset => (
          <div>
            <h2>{dataset.name}</h2>
            <p>{dataset.description}</p>
          </div>
        ))}
      </>
    )
  }
}

export default ListContainer