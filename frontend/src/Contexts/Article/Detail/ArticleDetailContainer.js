import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import CategoriesContainer from '../../../Shared/Categories/CategoriesContainer'
import ErrorContainer from '../../../Shared/Error/ErrorContainer'
import LoadingContainer from '../../../Shared/Loading/LoadingContainer'
import WrapperContainer from '../../../Shared/Wrapper/WrapperContainer'

const styles = {
  
}

@inject('ArticleStore')
@observer class ArticleDetailContainer extends Component {
  componentDidMount() {
    const { ArticleStore } = this.props

    if (ArticleStore.articles.length === 0) {
      ArticleStore.fetchArticles()
    }
  }

  render() {
    const { ArticleStore: { articles, loading } , match: {params} } = this.props
    const article = articles.find(article => article.id == params.id)
    const error = article ? '' : 'Can\'t find article.'

    return (
      <WrapperContainer>
        <CategoriesContainer />
        { loading ? <LoadingContainer /> :
          error ? <ErrorContainer error={error} /> :
          article && (
              <h1>{article.name}</h1>
          )
        }
      </WrapperContainer>
    )
  }
}

export default ArticleDetailContainer