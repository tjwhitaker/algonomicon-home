import { createComponent } from 'inferno-fela'
import Option from './Option'

const Time = createComponent(() => ({
  flex: '0 0 50%'
}))

const TimeContainer = () => (
  <Time>
    <Option>All Time</Option>
    <Option>Past Year</Option>
    <Option>Past Month</Option>
    <Option>Past Week</Option>
  </Time>
)

export default TimeContainer