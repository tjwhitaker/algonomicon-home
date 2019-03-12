import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const ArticleDetail = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const ArticleDetailContainer = ({ ArticleStore, match: {params} }) => {
  const article = ArticleStore.fetchArticle(params.slug)

  if (article) { document.title = `${article.name} | Algonomicon` }

  return (
    <ArticleDetail>
      <MainContainer article={article} />
      <SidebarContainer article={article} />
    </ArticleDetail>
  )
}

export default inject('ArticleStore')(observer(ArticleDetailContainer))
