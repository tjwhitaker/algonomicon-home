import { Route, Switch } from 'inferno-router'

import DefaultContainer from '../Layouts/DefaultContainer'
import ArticleIndexContainer from '../Article/Index/ArticleIndexContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    <DefaultContainer {...props}>
      <Component {...props} />
    </DefaultContainer>  
  )} />
)

const Routes = (
  <Switch>
    <AppRoute path="/articles" component={ArticleIndexContainer} exact />
  </Switch>
)

export default Routes