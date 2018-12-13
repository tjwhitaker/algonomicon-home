import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { Helmet } from 'inferno-helmet'
import WrapperContainer from '../Shared/Wrapper/WrapperContainer'
import mapboxgl from 'mapbox-gl'

const styles = {
  info: () => ({
    display: 'flex',
    alignItems: 'end'
  }),
  form: () => ({
    flex: '0 0 50%',
    paddingRight: '0.7rem'
  }),
  label: () => ({
    fontFamily: 'monospace',
    display: 'block'
  }),
  input: () => ({
    width: '100%',
    border: '1px solid #ccc',
    padding: '0.7rem',
    marginBottom: '1.4rem'
  }),
  textarea: () => ({
    width: '100%',
    marginBottom: 0,
    border: '1px solid #ccc',
    padding: '0.7em'
  }),
  location: () => ({
    flex: '0 0 50%',
    paddingLeft: '0.7rem'
  })
}

const Info = createComponent(styles.info)
const Form = createComponent(styles.form)
const Label = createComponent(styles.label)
const Input = createComponent(styles.input, 'input', ['type'])
const TextArea = createComponent(styles.textarea, 'textarea', ['rows'])
const Location = createComponent(styles.location)

class ContactContainer extends Component {
  componentDidMount() {
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

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.0/mapbox-gl.css' rel='stylesheet' /> 
        </Helmet>
        <WrapperContainer>
          <div>
            <h1>Contact</h1>
            <p>Thanks for your interest! I'd love to talk more if you have any questions, concerns or ideas. Feel free to use the form to email me, or get in touch through one of these other means.</p>
          </div>

          <Info>
            <Form>
              <div>
                <Label>Name</Label>
                <Input type="text" />
              </div>

              <div>
                <Label>Email</Label>
                <Input type="email" />
              </div>

              <div>
                <Label>Content</Label>
                <TextArea rows="10" />
              </div>
            </Form>

            <Location>
              <div style={{height: '369px'}} id="map"></div>
            </Location>
          </Info>
        </WrapperContainer>
      </div>

    )
  }
}

export default ContactContainer