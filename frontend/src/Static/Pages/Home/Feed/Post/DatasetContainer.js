import { Component } from 'inferno'
import { Link } from 'inferno-router'
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
    color: 'black',
    fontSize: '1.4rem',
    fontWeight: 'normal',
    margin: 0
  }),
  meta: () => ({
    color: '#aaa',
    fontSize: '1.1rem',
    fontWeight: 'normal',
    margin: 0,
  })
}

const Post = createComponent(styles.post)
const Title = createComponent(styles.title, 'h3')
const Description = createComponent(styles.description, 'p')
const Meta = createComponent(styles.meta, 'p')

class DatasetContainer extends Component {
  render() {
    return (
      <Post>
        <Link to={"/datasets/" + this.props.data.slug}>
          <Title>{this.props.data.name}</Title>
          <Description>{this.props.data.description.substring(0, 100)}...</Description>
          <Meta>Dataset from {moment(this.props.data.created_at).fromNow()}</Meta>
        </Link>
      </Post>
    )
  }
}

export default DatasetContainer