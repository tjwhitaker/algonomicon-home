import { inject, observer }  from 'inferno-mobx'

const AdminDatasetDetailContainer = ({ DatasetStore, match }) => {
  const dataset = DatasetStore.fetchDataset(match.params.slug)

  return (
    <div>
      { dataset && (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" value={dataset.name} />
          </div>

          <div>
            <label>Slug:</label>
            <input type="text" value={dataset.slug} />
          </div>

          <div>
            <label>Creator:</label>
            <input type="text" value={dataset.creator} />
          </div>

          <div>
            <label>Instances:</label>
            <input type="text" value={dataset.instances} />
          </div>

          <div>
            <label>Format:</label>
            <input type="text" value={dataset.format} />
          </div>

          <div>
            <label>Description:</label> 
            <textarea rows="5" value={dataset.description} />
          </div>

          <div>
            <label>Content:</label> 
            <textarea rows="10" value={dataset.content} />
          </div>
        </div>
      )}
    </div>
  )
}

export default inject('DatasetStore')(observer(AdminDatasetDetailContainer))