import { inject, observer } from 'inferno-mobx'

const AdminPaperIndexContainer = ({ PaperStore }) => {
  PaperStore.fetchPapers()

  return (
    <div>
      { PaperStore.papers.map(paper => (
        <p>{paper.name}</p>
      ))}
    </div>
  )
}

export default inject('PaperStore')(observer(AdminPaperIndexContainer))