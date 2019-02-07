import { createComponent } from 'inferno-fela'
import { Minion } from '../../../../../../Shared/Theme/Text'
import OrderContainer from './Order/OrderContainer'
import TimeContainer from './Time/TimeContainer'

const Sort = createComponent(() => ({
  display: 'flex',
  padding: '1.5rem 0'
}))

const SortContainer = () => (
  <div>
    <Minion>Sort</Minion>
    <Sort>
      <OrderContainer />
      <TimeContainer />
    </Sort>
  </div>
)

export default SortContainer