import { Route, Switch } from 'inferno-router'

import { LayoutContainer } from '../Shared/Layout/LayoutContainer'
import { ErrorContainer } from '../Shared/Layout/ErrorContainer'

import { AboutContainer } from '../Static/Pages/About/AboutContainer'
import { ContactContainer } from '../Static/Pages/Contact/ContactContainer'
import { HomeContainer } from '../Static/Pages/Home/HomeContainer'
import { NotFoundContainer } from '../Static/Pages/NotFound/NotFoundContainer'

import { ArticleIndexContainer } from '../Contexts/Article/Index/ArticleIndexContainer'
import ArticleDetailContainer from '../Contexts/Article/Detail/ArticleDetailContainer'
import DatasetIndexContainer from '../Contexts/Dataset/Index/DatasetIndexContainer'
import DatasetDetailContainer from '../Contexts/Dataset/Detail/DatasetDetailContainer'
import EventIndexContainer from '../Contexts/Event/Index/EventIndexContainer'
import EventDetailContainer from '../Contexts/Event/Detail/EventDetailContainer'
import PaperIndexContainer from '../Contexts/Paper/Index/PaperIndexContainer'
import PaperDetailContainer from '../Contexts/Paper/Detail/PaperDetailContainer'
import ProjectIndexContainer from '../Contexts/Project/Index/ProjectIndexContainer'
import ProjectDetailContainer from '../Contexts/Project/Detail/ProjectDetailContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    <LayoutContainer {...props}>
      <Component {...props} />
    </LayoutContainer>  
  )} />
)

const ErrorRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    <ErrorContainer {...props}>
      <Component {...props} />
    </ErrorContainer>
  )} />
)

const Routes = (
  <Switch>
    <AppRoute path="/" component={HomeContainer} exact />
    <AppRoute path="/about" component={AboutContainer} exact />
    <AppRoute path="/contact" component={ContactContainer} exact />
    
    <AppRoute path="/articles" component={ArticleIndexContainer} exact />
    <AppRoute path="/articles/:slug" component={ArticleDetailContainer} />

    <AppRoute path="/datasets" component={DatasetIndexContainer} exact />
    <AppRoute path="/datasets/:slug" component={DatasetDetailContainer} />
    
    <AppRoute path="/events" component={EventIndexContainer} exact />
    <AppRoute path="/events/:slug" component={EventDetailContainer} />
    
    <AppRoute path="/papers" component={PaperIndexContainer} exact />
    <AppRoute path="/papers/:slug" component={PaperDetailContainer} />
    
    <AppRoute path="/projects" component={ProjectIndexContainer} exact />
    <AppRoute path="/projects/:slug" component={ProjectDetailContainer} />

    <ErrorRoute path="*" component={NotFoundContainer} />
  </Switch>
)

export default Routes