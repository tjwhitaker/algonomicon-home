import { Redirect, Route, Switch } from 'inferno-router'
import { inject, observer } from 'inferno-mobx'

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
import AdminArticleIndexContainer from '../Contexts/Admin/Article/Index/AdminArticleIndexContainer'
import AdminArticleDetailContainer from '../Contexts/Admin/Article/Detail/AdminArticleDetailContainer'
import AdminArticleNewContainer from '../Contexts/Admin/Article/New/AdminArticleNewContainer'
import AdminDatasetIndexContainer from '../Contexts/Admin/Dataset/Index/AdminDatasetIndexContainer'
import AdminDatasetDetailContainer from '../Contexts/Admin/Dataset/Detail/AdminDatasetDetailContainer'
import AdminDatasetNewContainer from '../Contexts/Admin/Dataset/New/AdminDatasetNewContainer'
import AdminPaperIndexContainer from '../Contexts/Admin/Paper/Index/AdminPaperIndexContainer'
import AdminPaperDetailContainer from '../Contexts/Admin/Paper/Detail/AdminPaperDetailContainer'
import AdminPaperNewContainer from '../Contexts/Admin/Paper/New/AdminPaperNewContainer'
import AdminProjectIndexContainer from '../Contexts/Admin/Project/Index/AdminProjectIndexContainer'
import AdminProjectDetailContainer from '../Contexts/Admin/Project/Detail/AdminProjectDetailContainer'
import AdminProjectNewContainer from '../Contexts/Admin/Project/New/AdminProjectNewContainer'
import AdminVideoIndexContainer from '../Contexts/Admin/Video/Index/AdminVideoIndexContainer'
import AdminVideoDetailContainer from '../Contexts/Admin/Video/Detail/AdminVideoDetailContainer'
import AdminVideoNewContainer from '../Contexts/Admin/Video/New/AdminVideoNewContainer'

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <AppLayoutContainer {...props}>
      <Component {...props} />
    </AppLayoutContainer>  
  )} />
)

const AdminRoute = inject('UserStore')(observer(({ UserStore, component: Component, ...rest }) => {

  return (
    <Route {...rest} render={(props) => (
      UserStore.authenticated
        ? <AdminLayoutContainer {...props}>
            <Component {...props} />
          </AdminLayoutContainer>
        : <Redirect to="/login" />
    )} />
  )
}))

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
    <AppRoute exact path="/login" component={LoginContainer} />
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

    <AdminRoute exact path="/admin" component={AdminHomeContainer} />
    <AdminRoute exact path="/admin/dashboard" component={AdminDashboardContainer} />
    <AdminRoute exact path="/admin/articles" component={AdminArticleIndexContainer} />
    <AdminRoute exact path="/admin/articles/:slug" component={AdminArticleDetailContainer} />
    <AdminRoute exact path="/admin/articles/new" component={AdminArticleNewContainer} />
    <AdminRoute exact path="/admin/datasets" component={AdminDatasetIndexContainer} />
    <AdminRoute exact path="/admin/datasets/:slug" component={AdminDatasetDetailContainer} />
    <AdminRoute exact path="/admin/datasets/new" component={AdminDatasetNewContainer} />
    <AdminRoute exact path="/admin/papers" component={AdminPaperIndexContainer} />
    <AdminRoute exact path="/admin/papers/:slug" component={AdminPaperDetailContainer} />
    <AdminRoute exact path="/admin/papers/new" component={AdminPaperNewContainer} />
    <AdminRoute exact path="/admin/projects" component={AdminProjectIndexContainer} />
    <AdminRoute exact path="/admin/projects/:slug" component={AdminProjectDetailContainer} />
    <AdminRoute exact path="/admin/projects/new" component={AdminProjectNewContainer} />
    <AdminRoute exact path="/admin/videos" component={AdminVideoIndexContainer} />
    <AdminRoute exact path="/admin/videos/:slug" component={AdminVideoDetailContainer} />
    <AdminRoute exact path="/admin/videos/new" component={AdminVideoNewContainer} />

    <ErrorRoute path="*" component={ErrorContainer} />
  </Switch>
)

export default Routes