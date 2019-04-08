import { inject, observer } from 'inferno-mobx'

const AdminDatasetIndexContainer = ({ DatasetStore }) => {
  DatasetStore.fetchDatasets()

  return (
    <div>
      { DatasetStore.datasets.map(dataset => (
        <p>{dataset.name}</p>
      ))}
    </div>
  )
}

export default inject('DatasetStore')(observer(AdminDatasetIndexContainer))