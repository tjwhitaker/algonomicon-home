import { inject, observer } from 'inferno-mobx'
import { Link } from 'inferno-router'

const AdminPaperIndexContainer = ({ PaperStore }) => {
  PaperStore.fetchPapers()

  return (
    <div>
      { PaperStore.papers.map(paper => (
        <div>
          <Link to={`/admin/papers/${paper.slug}`}>{paper.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default inject('PaperStore')(observer(AdminPaperIndexContainer))