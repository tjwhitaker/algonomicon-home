import SearchContainer from './Search/SearchContainer'
import SortContainer from './Sort/SortContainer'
import TagsContainer from './Tags/TagsContainer'

const FiltersContainer = () => (
  <div>
    <SearchContainer />
    <SortContainer />
    <TagsContainer />
  </div>
)

export default FiltersContainer