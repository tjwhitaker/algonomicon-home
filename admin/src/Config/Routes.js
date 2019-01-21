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
import EventEditContainer from '../Contexts/Event/Edit/EventEditContainer'
import ModelIndexContainer from '../Contexts/Model/Index/ModelIndexContainer'
import ModelNewContainer from '../Contexts/Model/New/ModelNewContainer'
import ModelDetailContainer from '../Contexts/Model/Detail/ModelDetailContainer'
import ModelEditContainer from '../Contexts/Model/Edit/ModelEditContainer'
import PaperIndexContainer from '../Contexts/Paper/Index/PaperIndexContainer'
import PaperNewContainer from '../Contexts/Paper/New/PaperNewContainer'
import PaperDetailContainer from '../Contexts/Paper/Detail/PaperDetailContainer'
import PaperEditContainer from '../Contexts/Paper/Edit/PaperEditContainer'
import ProjectIndexContainer from '../Contexts/Project/Index/ProjectIndexContainer'
import ProjectNewContainer from '../Contexts/Project/New/ProjectNewContainer'
import ProjectDetailContainer from '../Contexts/Project/Detail/ProjectDetailContainer'
import ProjectEditContainer from '../Contexts/Project/Edit/ProjectEditContainer'

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
    <AppRoute path="/events/:id" component={EventDetailContainer} exact />
    <AppRoute path="/events/:id/edit" component={EventEditContainer} exact />

    <AppRoute path="/models" component={ModelIndexContainer} exact />
    <AppRoute path="/models/new" component={ModelNewContainer} exact />
    <AppRoute path="/models/:id" component={ModelDetailContainer} exact />
    <AppRoute path="/models/:id/edit" component={ModelEditContainer} exact />

    <AppRoute path="/papers" component={PaperIndexContainer} exact />
    <AppRoute path="/papers/new" component={PaperNewContainer} exact />
    <AppRoute path="/papers/:id" component={PaperDetailContainer} exact />
    <AppRoute path="/papers/:id/edit" component={PaperEditContainer} exact />

    <AppRoute path="/projects" component={ProjectIndexContainer} exact />
    <AppRoute path="/projects/new" component={ProjectNewContainer} exact />
    <AppRoute path="/projects/:id" component={ProjectDetailContainer} exact />
    <AppRoute path="/projects/:id/edit" component={ProjectEditContainer} exact />
  </Switch>
)

export default Routes