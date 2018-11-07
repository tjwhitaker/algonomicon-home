import { Route, Switch } from 'inferno-router'
import DefaultLayout from '../views/Layouts/DefaultLayout'
import AboutContainer from '../views/About/AboutContainer'
import ContactContainer from '../views/Contact/ContactContainer'
import HomeContainer from '../views/Home/HomeContainer'
import ArticlesContainer from '../views/Articles/ArticlesContainer'
import DatasetsContainer from '../views/Datasets/DatasetsContainer'
import EventsContainer from '../views/Events/EventsContainer'
import PapersContainer from '../views/Papers/PapersContainer'
import ProjectsContainer from '../views/Projects/ProjectsContainer'
import NotFoundContainer from '../views/Errors/NotFound/NotFoundContainer'
import SearchContainer from '../views/Search/SearchContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    <DefaultLayout {...props}>
      <Component {...props} />
    </DefaultLayout>  
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
    <AppRoute path="/search" component={SearchContainer} />
    <AppRoute path="*" component={NotFoundContainer} />
  </Switch>
)

export default Routes