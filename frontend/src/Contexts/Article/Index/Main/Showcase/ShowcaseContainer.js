import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import LoadingContainer from '../../../../../Shared/Loading/LoadingContainer'

const styles = {
  container: () => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }),
  feature: () => ({
    position: 'relative',
    overflow: 'hidden',
    flex: '0 0 100%',
    marginBottom: '5px'
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
  }),
  content: () => ({
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    padding: '2rem',
    background: '#111',
    maxWidth:  '50%'
  }),
  title: (props) => ({
    color: props.color,
    fontSize: props.size
  }),
  description: (props) => ({
    color: props.color,
    marginBottom: '0',
    fontWeight: 'normal'
  }),
  gridItem: () => ({
    flex: '0 0 30%',
    padding: '10px 0'
  })
}

const Container = createComponent(styles.container)
const Feature = createComponent(styles.feature)
const Image = createComponent(styles.image, 'img', ['src'])
const ImageContainer = createComponent(styles.imageContainer)
const Content = createComponent(styles.content)
const Title = createComponent(styles.title, 'h2')
const Description = createComponent(styles.description, 'p')
const GridItem = createComponent(styles.gridItem)

@inject('ArticleStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    const { ArticleStore } = this.props

    if (ArticleStore.articles.length === 0) {
      ArticleStore.fetchArticles()
    }
  }

  render() {
    const { articles, loading } = this.props.ArticleStore
    const error = articles.length ? '' : 'No articles found.'

    return (
      <Container>
        { loading ? <LoadingContainer /> :
          articles.map((article, index) => 
            index === 0 ? (
              <Feature>
                <Link to={'/articles/' + article.slug}>
                  <ImageContainer>
                    <Image src={article.hero + "?" + index} alt={article.name}/>
                  </ImageContainer>
                  <Content>
                    <Title color={'#eee'}>{article.name}</Title>
                    <Description color={'#aaa'}>{article.description.substring(0, 100)}...</Description>
                  </Content>
                </Link>
              </Feature>
            ) : (
              <GridItem>
                <Link to={'/articles/' + article.slug}>
                  <ImageContainer>
                    <Image src={article.hero + "?" + index} alt={article.name}/>
                  </ImageContainer>
                </Link>
                <Link to={'/articles/' + article.slug}>
                  <Title size={'1.6rem'}>{article.name}</Title>
                </Link>
                <Description>{article.description.substring(0, 100)}...</Description>
              </GridItem>
            )
          )
        }
      </Container>
    )
  }
}

export default ShowcaseContainer