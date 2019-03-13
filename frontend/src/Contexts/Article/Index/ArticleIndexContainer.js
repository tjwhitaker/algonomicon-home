import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const ArticleIndex = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const ArticleIndexContainer = ({ ArticleStore }) => {
  document.title = 'Articles | Algonomicon'
  ArticleStore.fetchArticles()

  return (
    <ArticleIndex>
      <MainContainer articles={ArticleStore.articles} />
      <SidebarContainer />
    </ArticleIndex>
  )
}

export default inject('ArticleStore')(observer(ArticleIndexContainer))