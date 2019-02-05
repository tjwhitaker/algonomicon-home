import { css } from 'glamor'
import { grid } from '../../../Shared/Theme/Layout'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const HomeContainer = () => {
  document.title = 'Algonomicon'

  return (
    <div {...grid}>
      <MainContainer />
      <SidebarContainer />
    </div>
  )
}

export default HomeContainer