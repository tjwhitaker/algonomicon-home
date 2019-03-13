import { inject, observer } from 'inferno-mobx'

const PaperDetailContainer = ({ PaperStore, match: {params} }) => {
  const paper = PaperStore.fetchPaper(params.slug)

  if (paper) { document.title = `${paper.name} | Algonomicon` }

  return (
    <div>
      { paper && (
        <div>
          <h1>{paper.name}</h1>
          <p>{paper.abstract}</p>
        </div>
      )}
    </div>
  )
}

export default inject('PaperStore')(observer(PaperDetailContainer))