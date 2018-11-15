import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  title: () => ({}),
  description: () => ({})
}

@inject('PaperStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    this.props.PaperStore.fetchPapers()
  }

  render() {
    return (
      <>
        {this.props.PaperStore.papers.map(paper => (
          <div>
            <h2>{paper.name}</h2>
            <p>{paper.description}</p>
          </div>
        ))}
      </>
    )
  }
}

export default ShowcaseContainer