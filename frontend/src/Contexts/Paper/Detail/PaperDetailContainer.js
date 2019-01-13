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

@inject('PaperStore')
@observer class PaperDetailComponent extends Component {
  componentDidMount() {
    const { PaperStore } = this.props

    if (PaperStore.papers.length === 0) {
      PaperStore.fetchPapers()
    }
  }

  render() {
    const { PaperStore: { papers, loading } , match: {params} } = this.props
    const paper = papers.find(paper => paper.slug === params.slug)
    const error = paper ? '' : 'Can\'t find paper.'

    return (
      <WrapperContainer>
        <CategoriesContainer />
        { loading ? <LoadingContainer /> :
          error ? <ErrorContainer error={error} /> :
          paper && (
            <Title>{paper.name}</Title>
          )
        }
      </WrapperContainer>
    )
  }
}

export default PaperDetailComponent