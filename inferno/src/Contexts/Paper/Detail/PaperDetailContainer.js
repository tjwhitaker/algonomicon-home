import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const PaperDetail = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const PaperDetailContainer = ({ PaperStore, match }) => {
  const paper = PaperStore.fetchPaper(match.params.slug)

  if (paper) { document.title = `${paper.name} | Algonomicon` }

  return (
    <PaperDetail>
      <MainContainer paper={paper} />
      <SidebarContainer paper={paper} />
    </PaperDetail>
  )
}

export default inject('PaperStore')(observer(PaperDetailContainer))