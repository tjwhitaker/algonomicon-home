import Koa from 'koa'
import logger from 'koa-logger'

import Articles from './contexts/articles'
import Datasets from './contexts/datasets'
import Events from './contexts/events'
import Papers from './contexts/papers'
import Projects from './contexts/projects'

const app = new Koa()
app.use(logger())

app.use(Articles.routes())
app.use(Datasets.routes())
app.use(Events.routes())
app.use(Papers.routes())
app.use(Projects.routes())

app.listen(8000)