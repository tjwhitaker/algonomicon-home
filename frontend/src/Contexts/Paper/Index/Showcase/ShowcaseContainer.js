import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  post: (props) => ({
    display: 'block',
    padding: '1.4rem 0',
    borderTop: props.borderTop,

    '&:first-child': {
      paddingTop: '0'
    }
  }),
  title: () => ({
  }),
  description: () => ({
    marginBottom: '0',
    fontWeight: 'normal',
    color:'black'
  })
}

const Post = createComponent(styles.post)
const Title = createComponent(styles.title, 'h3')
const Description = createComponent(styles.description, 'p')

@inject('PaperStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    this.props.PaperStore.fetchPapers()
  }

  render() {
    return (
      <>
        {this.props.PaperStore.papers.map((paper, index) => (
          <Post borderTop={index === 0 ? 0 : '1px solid #ccc'}>
            <Link to={'/papers/' + paper.id}>
              <Title>{paper.name}</Title>
              <Description>{paper.abstract.substring(0, 300)}...</Description>
            </Link>
          </Post>
        ))}
      </>
    )
  }
}

export default ShowcaseContainer