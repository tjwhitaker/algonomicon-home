import compose from 'koa-compose'
import Articles from './contexts/articles'
import Datasets from './contexts/datasets'
import Events from './contexts/events'
import Papers from './contexts/papers'
import Projects from './contexts/projects'
import Feed from './feed'

const Router = () => { 
  return compose([
    Articles.routes(), 
    Datasets.routes(),
    Events.routes(),
    Papers.routes(),
    Projects.routes(),
    Feed.routes()
  ])
}

export default Router