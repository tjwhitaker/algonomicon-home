import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import CategoriesContainer from '../../../Shared/Categories/CategoriesContainer'
import ErrorContainer from '../../../Shared/Error/ErrorContainer'
import LoadingContainer from '../../../Shared/Loading/LoadingContainer'
import WrapperContainer from '../../../Shared/Wrapper/WrapperContainer'

const styles = {
  title: () => ({})
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
      <WrapperContainer>
        <CategoriesContainer />
        { loading ? <LoadingContainer /> :
          error ? <ErrorContainer error={error} /> :
          dataset && (
            <Title>{dataset.name}</Title>
          )
        }
      </WrapperContainer>
    )
  }
}

export default DatasetDetailContainer