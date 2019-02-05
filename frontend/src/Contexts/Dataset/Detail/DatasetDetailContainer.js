import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import LoadingContainer from '../../../Shared/Loading/LoadingContainer'

const styles = {
  title: () => ({
    marginBottom: '1.4rem'
  })
}

const Title = createComponent(styles.title, 'h1')

@inject('DatasetStore')
@observer class DatasetDetailContainer extends Component {
  componentDidMount() {
    const { DatasetStore } = this.props

    if (DatasetStore.datasets.length === 0) {
      DatasetStore.fetchDatasets()
    }
  }

  render() {
    const { DatasetStore: {datasets, loading}, match: {params} } = this.props
    const dataset = datasets.find(dataset => dataset.slug === params.slug)
    const error = dataset ? '' : 'Can\t find dataset.'

    if (dataset) { document.title = dataset.name + ' | Algonomicon' }

    return (
      <div>
        { loading ? <LoadingContainer /> :
          error ? <p>{error}</p> :
          dataset && (
            <div>
              <Title>{dataset.name}</Title>
              <div>{dataset.content}</div>
            </div>
          )
        }
      </div>
    )
  }
}

export default DatasetDetailContainer