import { Route, Switch } from 'inferno-router'
import DefaultContainer from '../Layouts/DefaultContainer'
import AboutContainer from '../About/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'
import HomeContainer from '../Home/HomeContainer'
import ArticlesContainer from '../Articles/ArticlesContainer'
import DatasetsContainer from '../Datasets/DatasetsContainer'
import EventsContainer from '../Events/EventsContainer'
import PapersContainer from '../Papers/PapersContainer'
import ProjectsContainer from '../Projects/ProjectsContainer'
import NotFoundContainer from '../Errors/NotFound/NotFoundContainer'

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
    <AppRoute path="/articles" component={ArticlesContainer} />
    <AppRoute path="/datasets" component={DatasetsContainer} />
    <AppRoute path="/events" component={EventsContainer} />
    <AppRoute path="/papers" component={PapersContainer} />
    <AppRoute path="/projects" component={ProjectsContainer} />
    <AppRoute path="*" component={NotFoundContainer} />
  </Switch>
)

export default Routes