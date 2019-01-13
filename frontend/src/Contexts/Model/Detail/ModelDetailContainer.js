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

@inject('ModelStore')
@observer class ModelDetailContainer extends Component {
  componentDidMount() {
    const { ModelStore } = this.props

    if (ModelStore.models.length === 0) {
      ModelStore.fetchModels()
    }
  }

  render() {
    const { ModelStore: {models, loading}, match: {params} } = this.props
    const model = models.find(model => model.slug === params.slug)
    const error = model ? '' : 'Can\t find model.'

    return (
      <WrapperContainer>
        <CategoriesContainer />
        { loading ? <LoadingContainer /> :
          error ? <ErrorContainer error={error} /> :
          model && (
            <Title>{model.name}</Title>
          )
        }
      </WrapperContainer>
    )
  }
}

export default ModelDetailContainer