import { Route, Switch } from 'inferno-router'

import LayoutContainer from '../Shared/Layout/LayoutContainer'
import AboutContainer from '../Static/Pages/About/AboutContainer'
import ContactContainer from '../Static/Pages/Contact/ContactContainer'
import HomeContainer from '../Static/Pages/Home/HomeContainer'
import NotFoundContainer from '../Static/Pages/Errors/NotFound/NotFoundContainer'

import ArticleIndexContainer from '../Contexts/Article/Index/ArticleIndexContainer'
import ArticleDetailContainer from '../Contexts/Article/Detail/ArticleDetailContainer'
import DatasetIndexContainer from '../Contexts/Dataset/Index/DatasetIndexContainer'
import DatasetDetailContainer from '../Contexts/Dataset/Detail/DatasetDetailContainer'
import EventIndexContainer from '../Contexts/Event/Index/EventIndexContainer'
import EventDetailContainer from '../Contexts/Event/Detail/EventDetailContainer'
import ModelIndexContainer from '../Contexts/Model/Index/ModelIndexContainer'
import ModelDetailContainer from '../Contexts/Model/Detail/ModelDetailContainer'
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

const Routes = (
  <Switch>
    <AppRoute path="/" component={HomeContainer} exact />
    <AppRoute path="/about" component={AboutContainer} exact />
    <AppRoute path="/contact" component={ContactContainer} exact />
    
    <AppRoute path="/articles" component={ArticleIndexContainer} exact />
    <AppRoute path="/articles/:id" component={ArticleDetailContainer} />

    <AppRoute path="/datasets" component={DatasetIndexContainer} exact />
    <AppRoute path="/datasets/:id" component={DatasetDetailContainer} />
    
    <AppRoute path="/events" component={EventIndexContainer} exact />
    <AppRoute path="/events/:id" component={EventDetailContainer} />
    
    <AppRoute path="/models" component={ModelIndexContainer} exact />
    <AppRoute path="/models/:id" component={ModelDetailContainer} />
    
    <AppRoute path="/papers" component={PaperIndexContainer} exact />
    <AppRoute path="/papers/:id" component={PaperDetailContainer} />
    
    <AppRoute path="/projects" component={ProjectIndexContainer} exact />
    <AppRoute path="/projects/:id" component={ProjectDetailContainer} />

    <AppRoute path="*" component={NotFoundContainer} />
  </Switch>
)

export default Routes