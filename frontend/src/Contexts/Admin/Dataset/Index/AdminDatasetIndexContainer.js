import { inject, observer } from 'inferno-mobx'
import { Link } from 'inferno-router'

const AdminDatasetIndexContainer = ({ DatasetStore }) => {
  DatasetStore.fetchDatasets()

  return (
    <div>
      { DatasetStore.datasets.map(dataset => (
        <div>
          <Link to={`/admin/datasets/${dataset.slug}`}>{dataset.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default inject('DatasetStore')(observer(AdminDatasetIndexContainer))