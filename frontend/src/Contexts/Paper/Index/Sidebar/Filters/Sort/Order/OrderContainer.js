import { createComponent } from 'inferno-fela'
import Option from './Option'

const Order = createComponent(() => ({
  flex: '0 0 50%'
}))

const OrderContainer = () => (
  <Order>
    <Option>Recent</Option>
    <Option>Featured</Option>
    <Option>Trending</Option>
    <Option>Favorites</Option>
  </Order>
)

export default OrderContainer
