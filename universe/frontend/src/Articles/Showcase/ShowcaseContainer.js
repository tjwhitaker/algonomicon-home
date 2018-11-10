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
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      },
      {
        preview: 'https://source.unsplash.com/600x300',
        title: 'Hello!',
        description: 'This is a test description of a fake article post'
      }]
    })
  }

  render() {
    return (
      <div className="showcase-container">
        {this.state.articles.map((article, index) => 
          index === 0 ? (
            <div className="feature">
              <img className="preview" src={article.preview + "?" + index} alt={article.title}/>
              <div className="content">
                <h2 className="title">{article.title}</h2>
                <p className="description">{article.description}</p>
              </div>
            </div>
          ) : (
            <div className="article">
              <img className="preview" src={article.preview + "?" + index} alt={article.title}/>
              <div className="content">
                <h3 className="title">{article.title}</h3>
                <p className="description">{article.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    )
  }
}

export default ShowcaseContainer