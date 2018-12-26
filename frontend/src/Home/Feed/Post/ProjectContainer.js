import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import moment from 'moment'

const styles = {
  post: () => ({
    paddingTop: '1.4rem',
    paddingBottom: '1.4rem',
    borderBottom: '1px solid #ccc'
  }),
  title: () => ({
    fontWeight: 'bold',
    fontSize: '1.6rem'
  }),
  description: () => ({
    fontSize: '1.4rem',
    margin: 0
  }),
  meta: () => ({
    color: '#aaa',
    fontSize: '1.1rem',
    margin: 0,
  })
}

const Post = createComponent(styles.post)
const Title = createComponent(styles.title, 'h3')
const Description = createComponent(styles.description, 'p')
const Meta = createComponent(styles.meta, 'p')

class ProjectContainer extends Component {
  render() {
    return (
      <Post>
        <Title>{this.props.data.name}</Title>
        <Description>{this.props.data.description.substring(0, 100)}...</Description>
        <Meta>Project from {moment(this.props.data.created_at).fromNow()}</Meta>
      </Post>
    )
  }
}

export default ProjectContainer 