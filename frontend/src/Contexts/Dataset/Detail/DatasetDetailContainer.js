import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const DatasetDetail = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const DatasetDetailContainer = ({ DatasetStore, match: {params} }) => {
  const dataset = DatasetStore.fetchDataset(params.slug)

  if (dataset) { document.title = `${dataset.name} | Algonomicon` }
    
  return (
    <DatasetDetail>
      <MainContainer dataset={dataset} />
      <SidebarContainer dataset={dataset} />
    </DatasetDetail>
  )
}

export default inject('DatasetStore')(observer(DatasetDetailContainer))