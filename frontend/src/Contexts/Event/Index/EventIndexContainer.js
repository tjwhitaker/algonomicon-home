import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const EventIndex = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const EventIndexContainer = ({ EventStore }) => {
  document.title = 'Events | Algonomicon'
  EventStore.fetchEvents()

  return (
    <EventIndex>
      <MainContainer events={EventStore.events} />
      <SidebarContainer />
    </EventIndex>
  )
}

export default inject('EventStore')(observer(EventIndexContainer))