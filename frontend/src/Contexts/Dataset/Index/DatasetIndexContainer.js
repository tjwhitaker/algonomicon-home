import { createComponent } from 'inferno-fela'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const DatasetIndex = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const DatasetIndexContainer = () => {
  document.title = 'Datasets | Algonomicon'

  return (
    <DatasetIndex>
      <MainContainer />
      <SidebarContainer />
    </DatasetIndex>
  )
}

export default DatasetIndexContainer