import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import CategoriesContainer from '../../../Shared/Categories/CategoriesContainer'
import ErrorContainer from '../../../Shared/Error/ErrorContainer'
import LoadingContainer from '../../../Shared/Loading/LoadingContainer'
import WrapperContainer from '../../../Shared/Wrapper/WrapperContainer'

const styles = {
  title: () => ({
    marginBottom: '1.4rem',
  }),
  imageContainer: () => ({
    position:'relative',
    width: '100%',
    paddingBottom: '50%',
    height: '0',
    marginBottom: '0.7rem',
    background: '#eee'
  }),
  image: () => ({
    marginBottom: '5px',
    position: 'absolute',
    height:'100%',
    width: '100%',
    left: '0'
  })
}

const Title = createComponent(styles.title, 'h1')
const ImageContainer = createComponent(styles.imageContainer)
const Image = createComponent(styles.image, 'img', ['src'])

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
    const article = articles.find(article => article.slug === params.slug)
    const error = article ? '' : 'Can\'t find article.'

    if (article) { 
      document.title = article.name + ' | Algonomicon'
    }

    return (
      <WrapperContainer>
        <CategoriesContainer />
        { loading ? <LoadingContainer /> :
          error ? <ErrorContainer error={error} /> :
          article && (
            <div>
              <Title>{article.name}</Title>
              <ImageContainer>
                <Image src={article.hero} />
              </ImageContainer>
              <div>{article.content}</div>
            </div>
          )
        }
      </WrapperContainer>
    )
  }
}

export default ArticleDetailContainer