import { Redirect, Route, Switch } from 'inferno-router'

import Authentication from './Authentication'

import AppLayoutContainer from '../Shared/Layout/App/AppLayoutContainer'
import AdminLayoutContainer from '../Shared/Layout/Admin/AdminLayoutContainer'

import AboutContainer from '../Contexts/About/AboutContainer'
import ContactContainer from '../Contexts/Contact/ContactContainer'
import HomeContainer from '../Contexts/Home/HomeContainer'
import LoginContainer from '../Contexts/Login/LoginContainer'
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

import AdminHomeContainer from '../Contexts/Admin/Home/AdminHomeContainer'
import AdminDashboardContainer from '../Contexts/Admin/Dashboard/AdminDashboardContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <AppLayoutContainer {...props}>
      <Component {...props} />
    </AppLayoutContainer>  
  )} />
)

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Authentication.isAuthenticated 
      ? <AdminLayoutContainer {...props}>
          <Component {...props} />
        </AdminLayoutContainer>
      : <Redirect to="/login" />
  )} />
)

const ErrorRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <Component {...props} />
  )} />
)

const Routes = (
  <Switch>
    <AppRoute path="/" component={HomeContainer} exact />
    <AppRoute path="/about" component={AboutContainer} exact />
    <AppRoute path="/contact" component={ContactContainer} exact />
    <AppRoute path="/login" component={LoginContainer} exact />
    <AppRoute path="/articles" component={ArticleIndexContainer} exact />
    <AppRoute path="/articles/:slug" component={ArticleDetailContainer} />
    <AppRoute path="/datasets" component={DatasetIndexContainer} exact />
    <AppRoute path="/datasets/:slug" component={DatasetDetailContainer} />
    <AppRoute path="/papers" component={PaperIndexContainer} exact />
    <AppRoute path="/papers/:slug" component={PaperDetailContainer} />
    <AppRoute path="/projects" component={ProjectIndexContainer} exact />
    <AppRoute path="/projects/:slug" component={ProjectDetailContainer} />
    <AppRoute path="/videos" component={VideoIndexContainer} exact />
    <AppRoute path="/videos/:slug" component={VideoDetailContainer} />

    <AdminRoute path="/admin" component={AdminHomeContainer} exact />
    <AdminRoute path="/admin/dashboard" component={AdminDashboardContainer} exact />
    <AdminRoute path="/admin/articles" />
    <AdminRoute path="/admin/articles/new" />
    <AdminRoute path="/admin/articles/:slug" />
    <AdminRoute path="/admin/datasets" />
    <AdminRoute path="/admin/datasets/new" />
    <AdminRoute path="/admin/datasets/:slug" />
    <AdminRoute path="/admin/papers" />
    <AdminRoute path="/admin/papers/new" />
    <AdminRoute path="/admin/papers/:slug" />
    <AdminRoute path="/admin/projects" />
    <AdminRoute path="/admin/projects/new" />
    <AdminRoute path="/admin/projects/:slug" />
    <AdminRoute path="/admin/papers" />
    <AdminRoute path="/admin/papers/new" />
    <AdminRoute path="/admin/papers/:slug" />
    <AdminRoute path="/admin/videos" />
    <AdminRoute path="/admin/videos/new" />
    <AdminRoute path="/admin/videos/:slug" />

    <ErrorRoute path="*" component={ErrorContainer} />
  </Switch>
)

export default Routes