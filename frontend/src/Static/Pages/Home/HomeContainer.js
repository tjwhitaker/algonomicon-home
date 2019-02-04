import { MainContainer } from './Main/MainContainer'
import { SidebarContainer } from './Sidebar/SidebarContainer'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'
import { css } from 'glamor'
import { grid } from '../../../Shared/Theme/Layout'

export const HomeContainer = () => {
  document.title = 'Algonomicon'

  return (
    <WrapperContainer {...grid}>
      <MainContainer />
      <SidebarContainer />
    </WrapperContainer>
  )
}
