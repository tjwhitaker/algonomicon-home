import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
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
    const { ArticleStore: {error, loading} , match: {params} } = this.props
    const article = this.props.ArticleStore.getArticle(params.id)
    const missingError = 'Cannot find article with id ' + params.id

    return (
      <WrapperContainer>
        { loading ? <LoadingContainer /> :
          error ? <ErrorContainer error={error} /> :
          !article ? <ErrorContainer error={missingError} /> :
            (
              <h1>{article.name}</h1>
            )
        }
      </WrapperContainer>
    )
  }
}

export default ArticleDetailContainer