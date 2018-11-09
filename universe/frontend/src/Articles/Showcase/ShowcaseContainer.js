import { Component } from 'inferno'

class ShowcaseContainer extends Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.setState({
      articles: [{
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      }]
    })
  }

  render() {
    return (
      <div className="showcase-container">
        {this.state.articles.map(article => (
          <div className="feature">
            <img className="preview" src={article.preview} alt={article.title}/>
            <div className="content">
              <h2 className="title">{article.title}</h2>
              <p className="description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ShowcaseContainer