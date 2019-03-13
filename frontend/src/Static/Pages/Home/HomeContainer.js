import { createComponent } from 'inferno-fela'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const Home = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))


const HomeContainer = () => {
  document.title = 'Algonomicon'

  return (
    <Home>
      <MainContainer />
      <SidebarContainer />
    </Home>
  )
}

export default HomeContainer