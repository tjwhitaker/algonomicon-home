import { MainContainer } from './Main/MainContainer'
import { SidebarContainer } from './Sidebar/SidebarContainer'
import { grid } from '../../../Shared/Theme/Layout'

export const ArticleIndexContainer = () => {
  document.title = 'Articles | Algonomicon'

  return (
    <div {...grid}>
      <MainContainer />
      <SidebarContainer />
    </div>
  )
}