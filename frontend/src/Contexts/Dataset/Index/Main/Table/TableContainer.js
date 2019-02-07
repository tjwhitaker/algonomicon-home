import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import HeadContainer from './Head/HeadContainer'
import BodyContainer from './Body/BodyContainer'

const Table = createComponent(() => ({
  width: '100%'
}), 'table')

const TableContainer = ({ DatasetStore }) => {
  DatasetStore.fetchDatasets()

  return (
    <div>
      { DatasetStore.datasets && (
        <Table>
          <HeadContainer />
          <BodyContainer datasets={DatasetStore.datasets} />
        </Table>
      )}
    </div>
  )
}

export default inject('DatasetStore')(observer(TableContainer))