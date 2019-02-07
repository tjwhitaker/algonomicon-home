import { createComponent } from 'inferno-fela'
import { Minion } from '../../../../../../Shared/Theme/Text'
import InputContainer from './Input/InputContainer'
 
const Search = createComponent(() => ({
  padding: '1.5rem 0'
}))

const SearchContainer = () => (
  <div>
    <Minion>Search</Minion>
    <Search>
      <InputContainer />
    </Search>
  </div>
)

export default SearchContainer