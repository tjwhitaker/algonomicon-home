import { Route, Switch } from 'inferno-router'
import Home from '../pages/Home'

export default (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
);