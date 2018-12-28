import { Route, Switch } from 'inferno-router'

import DefaultContainer from '../Layouts/DefaultContainer'
import AboutContainer from '../Pages/About/AboutContainer'
import ContactContainer from '../Pages/Contact/ContactContainer'
import HomeContainer from '../Pages/Home/HomeContainer'
import NotFoundContainer from '../Pages/Errors/NotFound/NotFoundContainer'

import ArticleIndexContainer from '../Article/Index/ArticleIndexContainer'
import ArticleDetailContainer from '../Article/Detail/ArticleDetailContainer'
import DatasetIndexContainer from '../Dataset/Index/DatasetIndexContainer'
import DatasetDetailContainer from '../Dataset/Detail/DatasetDetailContainer'
import EventIndexContainer from '../Event/Index/EventIndexContainer'
import EventDetailContainer from '../Event/Detail/EventDetailContainer'
import ModelIndexContainer from '../Model/Index/ModelIndexContainer'
import ModelDetailContainer from '../Model/Detail/ModelDetailContainer'
import PaperIndexContainer from '../Paper/Index/PaperIndexContainer'
import PaperDetailContainer from '../Paper/Detail/PaperDetailContainer'
import ProjectIndexContainer from '../Project/Index/ProjectIndexContainer'
import ProjectDetailContainer from '../Project/Detail/ProjectDetailContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    <DefaultContainer {...props}>
      <Component {...props} />
    </DefaultContainer>  
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