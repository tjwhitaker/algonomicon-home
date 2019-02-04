import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { css } from 'glamor'
import { brevier, longPrimer, pica } from '../../../../../../Shared/Theme/Text'
import moment from 'moment'

const post = css({
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #ccc'
})

const title = css({
  marginBottom: '0.2rem'
})

const content = css({
  fontWeight: 'normal',
  color: '#111',
  marginBottom: '0.2rem'
})

const meta = css({
  marginBottom: 0
})

class ArticleContainer extends Component {
  render() {
    return (
      <div {...post}>
        <Link to={"/articles/" + this.props.data.slug}>
          <h2 {...title} {...pica}>{this.props.data.name}</h2>
          <p {...content} {...longPrimer}>{this.props.data.description.substring(0, 100)}...</p>
          <p {...meta} {...brevier}>Article from {moment(this.props.data.created_at).fromNow()}</p>
        </Link>
      </div>
    )
  }
}

export default ArticleContainer