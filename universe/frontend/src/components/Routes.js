import { Route, Switch } from 'inferno-router'
import Layout from '../pages/Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import Datasets from '../pages/Datasets'
import Events from '../pages/Events'
import Papers from '../pages/Papers'
import Projects from '../pages/Projects'
import NotFound from '../pages/NotFound'
import Search from '../pages/Search'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    <Layout {...props}>
      <Component {...props} />
    </Layout>  
  )} />
)

const Routes = (
  <Switch>
    <AppRoute path="/" component={Home} exact />
    <AppRoute path="/about" component={About} exact />
    <AppRoute path="/contact" component={Contact} exact />
    <AppRoute path="/articles" component={Articles} />
    <AppRoute path="/datasets" component={Datasets} />
    <AppRoute path="/events" component={Events} />
    <AppRoute path="/papers" component={Papers} />
    <AppRoute path="/projects" component={Projects} />
    <AppRoute path="/search" component={Search} />
    <AppRoute path="*" component={NotFound} />
  </Switch>
)

export default Routes