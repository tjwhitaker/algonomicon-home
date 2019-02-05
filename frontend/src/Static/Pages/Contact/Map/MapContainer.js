import { Helmet } from 'inferno-helmet'
import { css } from 'glamor'
import mapboxgl from 'mapbox-gl'

const flex = css({
  flex: '0 0 50%',
  paddingLeft: '0.7rem'
})

const map = css({
  height: '370px'
})

const MapContainer = () => (
  <div {...flex}>
    <Helmet>
      <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.0/mapbox-gl.css' rel='stylesheet' /> 
    </Helmet>
    <div {...map} id="map"></div>
  </div>
)

MapContainer.defaultHooks = {
  onComponentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtcDRjbGltYmVyIiwiYSI6ImNpdzhwM2VzbjAyc24yb21zZjduZHh3dmMifQ.k42_5Mnh3NX7pUqkQTA2SA';
  
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-105.073333, 40.588722],
      zoom: 14,
      interactive: false
    })
    
    new mapboxgl.Marker()
      .setLngLat([-105.073333, 40.588722])
      .addTo(map)
  }
}

export default MapContainer