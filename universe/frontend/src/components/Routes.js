import { Route, Switch } from 'inferno-router'
import Layout from '../pages/Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
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
    <AppRoute path="/search" component={Search} />
    <AppRoute path="*" component={NotFound} />
  </Switch>
)

export default Routes