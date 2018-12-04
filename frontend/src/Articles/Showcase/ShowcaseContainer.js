import { Component } from 'inferno'
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
    marginBottom: '10px'
  }),
  preview: () => ({
    marginBottom: '0'
  }),
  content: () => ({
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    padding: '2rem',
    background: '#111'
  }),
  title: (props) => ({
    color: props.color
  }),
  description: (props) => ({
    color: props.color,
    marginBottom: '0'
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
    this.props.ArticleStore.fetchArticles()
  }

  render() {
    return (
      <Container>
        {this.props.ArticleStore.articles.map((article, index) => 
          index === 0 ? (
            <Feature>
              <Preview src={article.preview + "?" + index} alt={article.name}/>
              <Content>
                <Title color={'#eee'}>{article.name}</Title>
                <Description color={'#aaa'}>{article.description}</Description>
              </Content>
            </Feature>
          ) : (
            <GridItem>
              <Preview src={article.preview + "?" + index} alt={article.name}/>
              <Title>{article.name}</Title>
              <Description>{article.description}</Description>
            </GridItem>
          )
        )}
      </Container>
    )
  }
}

export default ShowcaseContainer