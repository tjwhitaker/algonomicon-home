import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  row: () => ({
    display: 'table-row'
  }),
  cell: () => ({
    display: 'table-cell',
    paddingRight: '1.4rem'
  })
}

const Row = createComponent(styles.row)
const Cell = createComponent(styles.cell)

@inject('ArticleStore')
@observer class ArticleIndexContainer extends Component {
  componentDidMount() {
    if (this.props.ArticleStore.articles.length === 0) {
      this.props.ArticleStore.fetchArticles()
    }
  }

  render() {
    return (
      <div>
        {this.props.ArticleStore.articles.map((article) => (
          <Row>
            <Cell>{article.name}</Cell>
            <Cell><Link to={'/articles/' + article.id}>View</Link></Cell>
            <Cell><Link to={'/articles/' + article.id + '/edit'}>Edit</Link></Cell>
            <Cell><Link to={'/articles/' + article.id}>Delete</Link></Cell>
          </Row>
        ))}
        <Link to="/articles/new">New Article</Link>
      </div>
    )
  }
}

export default ArticleIndexContainer