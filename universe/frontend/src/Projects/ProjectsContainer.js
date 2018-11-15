import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

const styles = {
  wrapper: () => ({
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '1.4rem'
  })
}

const Wrapper = createComponent(styles.wrapper)

class ProjectsContainer extends Component {
  render() {
    return (
      <Wrapper>
        <CategoriesContainer />
        <div className="wrapper">
          <h1>Projects</h1>
        </div>
      </Wrapper>
    )
  }
}

export default ProjectsContainer