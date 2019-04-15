import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const DatasetIndex = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const DatasetIndexContainer = ({ DatasetStore }) => {
  document.title = 'Datasets | Algonomicon'
  DatasetStore.fetchDatasets()

  return (
    <DatasetIndex>
      <MainContainer datasets={DatasetStore.datasets} />
      <SidebarContainer />
    </DatasetIndex>
  )
}

export default inject('DatasetStore')(observer(DatasetIndexContainer))