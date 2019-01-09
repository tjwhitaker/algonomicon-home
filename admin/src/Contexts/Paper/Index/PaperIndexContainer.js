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

@inject('PaperStore')
@observer class PaperIndexContainer extends Component {
  componentDidMount() {
    if (this.props.PaperStore.papers.length === 0) {
      this.props.PaperStore.fetchPapers()
    }
  }

  render() {
    return (
      <div>
        {this.props.PaperStore.papers.map((paper) => (
          <Row>
            <Cell>{paper.name}</Cell>
            <Cell><Link to={'/papers/' + paper.id}>View</Link></Cell>
            <Cell><Link to={'/papers/' + paper.id}>Edit</Link></Cell>
            <Cell><Link to={'/papers/' + paper.id}>Delete</Link></Cell>
          </Row>
        ))}
        <Link to="/papers/new">New Paper</Link>
      </div>
    )
  }
}

export default PaperIndexContainer