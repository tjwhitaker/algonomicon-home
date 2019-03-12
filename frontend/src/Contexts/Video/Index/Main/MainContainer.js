import { createComponent } from 'inferno-fela'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ videos }) => (
  <Main>
    { videos.map(video => (
      <div>{video.name}</div>
    ))}
  </Main>
)

export default MainContainer