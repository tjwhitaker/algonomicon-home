import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

import ProjectContainer from './Project/ProjectContainer'

const ShowcaseContainer = ({ projects }) => (
  <div>
    { projects.map(project =>
        <ProjectContainer project={project} />
    )}
  </div>
)

export default ShowcaseContainer