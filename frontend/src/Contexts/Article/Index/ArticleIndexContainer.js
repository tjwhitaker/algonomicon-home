import { MainContainer } from './Main/MainContainer'
import { SidebarContainer } from './Sidebar/SidebarContainer'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'
import { createComponent } from 'inferno-fela'

const Grid = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const setTitle = () => document.title = 'Articles | Algonomicon'

export const ArticleIndexContainer = () => (
  <WrapperContainer onComponentDidMount={setTitle}>
    <Grid>
      <MainContainer />
      <SidebarContainer />
    </Grid>
  </WrapperContainer>
)