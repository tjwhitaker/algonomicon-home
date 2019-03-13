import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const PaperIndex = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const PaperIndexContainer = ({ PaperStore }) => {
  document.title = 'Papers | Algonomicon'
  PaperStore.fetchPapers()

  return (
    <PaperIndex>
      <MainContainer papers={PaperStore.papers} />
      <SidebarContainer />
    </PaperIndex>
  )
}

export default inject('PaperStore')(observer(PaperIndexContainer))