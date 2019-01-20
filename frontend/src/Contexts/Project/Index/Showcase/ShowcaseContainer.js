import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  project: () => ({
    display: 'flex',
    padding: '1.4rem 0',
    alignItems: 'center',

    '&:first-child': {
      paddingTop: '0'
    }
  }),
  preview: () => ({
    flex: '0 0 50%',
    paddingRight: '1.4rem'
  }),
  content: () => ({
    flex: '0 0 50%',
    paddingLeft: '1.4rem'
  }),
  title: () => ({}),
  description: () => ({
    fontWeight: 'normal',
    color: 'black'
  })
}

const Project = createComponent(styles.project, Link, ['to'])
const Preview = createComponent(styles.preview)
const Content = createComponent(styles.content)
const Title = createComponent(styles.title, 'h2')
const Description = createComponent(styles.description, 'p')

@inject('ProjectStore')
@observer class ShowcaseContainer extends Component {
  componentDidMount() {
    if (this.props.ProjectStore.projects.length === 0) {
      this.props.ProjectStore.fetchProjects()
    }
  }

  render() {
    return (
      <>
        {this.props.ProjectStore.projects.map((project, index) => (
          <Project to={'/projects/' + project.slug}>
            <Preview>
              <img src={project.hero + '?' + index} alt={project.name} />
            </Preview>
            <Content>
              <Title>{project.name}</Title>
              <Description>{project.description}</Description>
            </Content> 
          </Project>
        ))}
      </>
    )
  }
}

export default ShowcaseContainer