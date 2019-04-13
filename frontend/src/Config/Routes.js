import { Route, Switch } from 'inferno-router'
import LayoutContainer from '../Shared/Layout/LayoutContainer'
import AboutContainer from '../Contexts/About/AboutContainer'
import ContactContainer from '../Contexts/Contact/ContactContainer'
import HomeContainer from '../Contexts/Home/HomeContainer'
import ErrorContainer from '../Contexts/Error/ErrorContainer'
import ArticleIndexContainer from '../Contexts/Article/Index/ArticleIndexContainer'
import ArticleDetailContainer from '../Contexts/Article/Detail/ArticleDetailContainer'
import DatasetIndexContainer from '../Contexts/Dataset/Index/DatasetIndexContainer'
import DatasetDetailContainer from '../Contexts/Dataset/Detail/DatasetDetailContainer'
import PaperIndexContainer from '../Contexts/Paper/Index/PaperIndexContainer'
import PaperDetailContainer from '../Contexts/Paper/Detail/PaperDetailContainer'
import ProjectIndexContainer from '../Contexts/Project/Index/ProjectIndexContainer'
import ProjectDetailContainer from '../Contexts/Project/Detail/ProjectDetailContainer'
import VideoIndexContainer from '../Contexts/Video/Index/VideoIndexContainer'
import VideoDetailContainer from '../Contexts/Video/Detail/VideoDetailContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <LayoutContainer {...props}>
      <Component {...props} />
    </LayoutContainer>  
  )} />
)

const ErrorRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <Component {...props} />
  )} />
)

const Routes = (
  <Switch>
    <AppRoute exact path="/" component={HomeContainer} />
    <AppRoute exact path="/about" component={AboutContainer} />
    <AppRoute exact path="/contact" component={ContactContainer} />
    <AppRoute exact path="/articles" component={ArticleIndexContainer} />
    <AppRoute exact path="/articles/:slug" component={ArticleDetailContainer} />
    <AppRoute exact path="/datasets" component={DatasetIndexContainer} />
    <AppRoute exact path="/datasets/:slug" component={DatasetDetailContainer} />
    <AppRoute exact path="/papers" component={PaperIndexContainer} />
    <AppRoute exact path="/papers/:slug" component={PaperDetailContainer} />
    <AppRoute exact path="/projects" component={ProjectIndexContainer} />
    <AppRoute exact path="/projects/:slug" component={ProjectDetailContainer} />
    <AppRoute exact path="/videos" component={VideoIndexContainer} />
    <AppRoute exact path="/videos/:slug" component={VideoDetailContainer} />

    <ErrorRoute path="*" component={ErrorContainer} />
  </Switch>
)

export default Routes