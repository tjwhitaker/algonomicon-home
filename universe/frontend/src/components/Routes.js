import { Component } from 'inferno'
import { Route, Switch } from 'inferno-router'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const AppRoute = ({ ...rest }) => (
  <Route {...rest} render={ props => (
    <Layout {...props}>
      <Component {...props} />
    </Layout>  
  )} />
)

const Routes = (
  <Switch>
    <AppRoute path="/" component={Home} exact />
    <AppRoute path="*" component={NotFound} />
  </Switch>
)

export default Routes