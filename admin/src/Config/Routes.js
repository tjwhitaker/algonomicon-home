import { Route, Switch } from 'inferno-router'

import LayoutContainer from '../Shared/Layout/LayoutContainer'
import OverviewContainer from '../Static/Pages/Overview/OverviewContainer'
import ArticleIndexContainer from '../Contexts/Article/Index/ArticleIndexContainer'
import ArticleNewContainer from '../Contexts/Article/New/ArticleNewContainer'
import ArticleDetailContainer from '../Contexts/Article/Detail/ArticleDetailContainer'
import ArticleEditContainer from '../Contexts/Article/Edit/ArticleEditContainer'
import DatasetIndexContainer from '../Contexts/Dataset/Index/DatasetIndexContainer'
import DatasetNewContainer from '../Contexts/Dataset/New/DatasetNewContainer'
import DatasetDetailContainer from '../Contexts/Dataset/Detail/DatasetDetailContainer'
import DatasetEditContainer from '../Contexts/Dataset/Edit/DatasetEditContainer'
import EventIndexContainer from '../Contexts/Event/Index/EventIndexContainer'
import EventNewContainer from '../Contexts/Event/New/EventNewContainer'
import EventDetailContainer from '../Contexts/Event/Detail/EventDetailContainer'
import ModelIndexContainer from '../Contexts/Model/Index/ModelIndexContainer'
import ModelNewContainer from '../Contexts/Model/New/ModelNewContainer'
import ModelDetailContainer from '../Contexts/Model/Detail/ModelDetailContainer'
import PaperIndexContainer from '../Contexts/Paper/Index/PaperIndexContainer'
import PaperNewContainer from '../Contexts/Paper/New/PaperNewContainer'
import PaperDetailContainer from '../Contexts/Paper/Detail/PaperDetailContainer'
import ProjectIndexContainer from '../Contexts/Project/Index/ProjectIndexContainer'
import ProjectNewContainer from '../Contexts/Project/New/ProjectNewContainer'
import ProjectDetailContainer from '../Contexts/Project/Detail/ProjectDetailContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <LayoutContainer {...props}>
      <Component {...props} />
    </LayoutContainer>
  )} />
)

const Routes = (
  <Switch>
    <AppRoute path="/" component={OverviewContainer} exact />
    
    <AppRoute path="/articles" component={ArticleIndexContainer} exact />
    <AppRoute path="/articles/new" component={ArticleNewContainer} exact />
    <AppRoute path="/articles/:id" component={ArticleDetailContainer} exact />
    <AppRoute path="/articles/:id/edit" component={ArticleEditContainer} exact />

    <AppRoute path="/datasets" component={DatasetIndexContainer} exact />
    <AppRoute path="/datasets/new" component={DatasetNewContainer} exact />
    <AppRoute path="/datasets/:id" component={DatasetDetailContainer} exact/>
    <AppRoute path="/datasets/:id/edit" component={DatasetEditContainer} exact />

    <AppRoute path="/events" component={EventIndexContainer} exact />
    <AppRoute path="/events/new" component={EventNewContainer} exact />
    <AppRoute path="/events/:id" component={EventDetailContainer} />

    <AppRoute path="/models" component={ModelIndexContainer} exact />
    <AppRoute path="/models/new" component={ModelNewContainer} exact />
    <AppRoute path="/models/:id" component={ModelDetailContainer} />

    <AppRoute path="/papers" component={PaperIndexContainer} exact />
    <AppRoute path="/papers/new" component={PaperNewContainer} exact />
    <AppRoute path="/papers/:id" component={PaperDetailContainer} />

    <AppRoute path="/projects" component={ProjectIndexContainer} exact />
    <AppRoute path="/projects/new" component={ProjectNewContainer} exact />
    <AppRoute path="/projects/:id" component={ProjectDetailContainer} />
  </Switch>
)

export default Routes