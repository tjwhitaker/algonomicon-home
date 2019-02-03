import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import LoadingContainer from '../../../Shared/Loading/LoadingContainer'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'

const styles = {
  title: () => ({
    marginBottom: '1.4rem'
  })
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

    if (paper) { document.title = paper.name + ' | Algonomicon' }

    return (
      <WrapperContainer>
        { loading ? <LoadingContainer /> :
          error ? <p>{error}</p> :
          paper && (
            <Title>{paper.name}</Title>
          )
        }
      </WrapperContainer>
    )
  }
}

export default PaperDetailComponent