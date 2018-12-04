import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  post: () => ({
    display: 'block',
    padding: '1.4rem 0',
    borderBottom: '1px solid #ccc',

    '&:first-child': {
      paddingTop: '0'
    }
  }),
  title: () => ({
  }),
  description: () => ({
    marginBottom: '0'
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
        {this.props.PaperStore.papers.map(paper => (
          <Post>
            <Title>{paper.name}</Title>
            <Description>{paper.abstract}</Description>
          </Post>
        ))}
      </>
    )
  }
}

export default ShowcaseContainer