import { createComponent } from 'inferno-fela'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const ArticleIndex = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const ArticleIndexContainer = () => {
  document.title = 'Articles | Algonomicon'

  return (
    <ArticleIndex>
      <MainContainer />
      <SidebarContainer />
    </ArticleIndex>
  )
}

export default ArticleIndexContainer