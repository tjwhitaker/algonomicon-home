import { inject, observer } from 'inferno-mobx'

const EventDetailContainer = ({ EventStore, match: {params} }) => {
  const event = EventStore.fetchEvent(params.slug)
  
  if (event) { document.title = `${event.name} | Algonomicon` }

  return (
    <div>
      { event && (
        <div>
          <h1>{event.name}</h1>
          <p>{event.location}</p>
          <p>{event.date}</p>
        </div>
      )}
    </div>
  )
}

export default inject('EventStore')(observer(EventDetailContainer))