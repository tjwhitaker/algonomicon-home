import { createComponent } from 'inferno-fela'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ video }) => (
  <Main>
    { video && 
      <div>
        <div style={{position: 'relative', 'padding-bottom':'56.25%', width: '100%'}}>
        <iframe width="100%" height="100%" title="Differential Equations" src="https://www.youtube-nocookie.com/embed/p_di4Zn4wz4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}  allowfullscreen></iframe>
        </div>
        <p>{ video.description }</p>
      </div>
    }
  </Main>
)

export default MainContainer