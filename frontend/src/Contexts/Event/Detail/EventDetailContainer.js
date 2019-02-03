import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import LoadingContainer from '../../../Shared/Loading/LoadingContainer'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'

const styles = {
  title: () => ({})
}

const Title = createComponent(styles.title, 'h1')

@inject('EventStore')
@observer class EventDetailContainer extends Component {
  componentDidMount() {
    const { EventStore } = this.props

    if (EventStore.events.length === 0) {
      EventStore.fetchEvents()
    }
  }

  render() {
    const { EventStore: {events, loading}, match: {params} } = this.props
    const event = events.find(event => event.slug === params.slug)
    const error = event ? '' : 'Can\t find event.'

    if (event) { document.title = event.name + ' | Algonomicon' }

    return (
      <WrapperContainer>
        { loading ? <LoadingContainer /> :
          error ? <p>{error}</p> :
          event && (
            <Title>{event.name}</Title>
          )
        }
      </WrapperContainer>
    )
  }
}

export default EventDetailContainer