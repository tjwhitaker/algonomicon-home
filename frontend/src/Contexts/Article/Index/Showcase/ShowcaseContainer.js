import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

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
  preview: () => ({
    marginBottom: '5px'
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
const Preview = createComponent(styles.preview, 'img', ['src'])
const Content = createComponent(styles.content)
const Title = createComponent(styles.title, 'h2')
const Description = createComponent(styles.description, 'p')
const GridItem = createComponent(styles.gridItem)

@inject('ArticleStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    if (this.props.ArticleStore.articles.length === 0) {
      this.props.ArticleStore.fetchArticles()
    }
  }

  render() {
    return (
      <Container>
        {this.props.ArticleStore.articles.map((article, index) => 
          index === 0 ? (
            <Feature>
              <Link to={'/articles/' + article.id}>
                <Preview src={article.preview + "?" + index} alt={article.name}/>
                <Content>
                  <Title color={'#eee'}>{article.name}</Title>
                  <Description color={'#aaa'}>{article.description.substring(0, 100)}...</Description>
                </Content>
              </Link>
            </Feature>
          ) : (
            <GridItem>
              <Link to={'/articles/' + article.id}><Preview src={article.preview + "?" + index} alt={article.name}/></Link>
              <Link to={'/articles/' + article.id}><Title size={'1.6rem'}>{article.name}</Title></Link>
              <Description>{article.description.substring(0, 100)}...</Description>
            </GridItem>
          )
        )}
      </Container>
    )
  }
}

export default ShowcaseContainer