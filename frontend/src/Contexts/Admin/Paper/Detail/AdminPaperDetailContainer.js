import { inject, observer } from 'inferno-mobx'

const AdminPaperDetailContainer = ({ PaperStore, match }) => {
  const paper = PaperStore.fetchPaper(match.params.slug)

  return (
    <div>
      { paper && (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" value={paper.name} />
          </div>

          <div>
            <label>Slug:</label>
            <input type="text" value={paper.slug} />
          </div>

          <div>
            <label>Author:</label>
            <input type="text" value={paper.author} />
          </div>

          <div>
            <label>Abstract:</label> 
            <textarea rows="10" value={paper.abstract} />
          </div>
        </div>
      )}
    </div>
  )
}


export default inject('PaperStore')(observer(AdminPaperDetailContainer))