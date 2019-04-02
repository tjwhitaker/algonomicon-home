import ArticleStore from '../Contexts/Article/ArticleStore'
import DatasetStore from '../Contexts/Dataset/DatasetStore'
import FeedStore from '../Contexts/Home/Sidebar/Feed/FeedStore'
import FlashStore from '../Shared/Layout/Flash/FlashStore'
import PaperStore from '../Contexts/Paper/PaperStore'
import ProjectStore from '../Contexts/Project/ProjectStore'
import RegistrationStore from '../Shared/Layout/Header/Content/Registration/RegistrationStore'
import VideoStore from '../Contexts/Video/VideoStore'

export default {
  ArticleStore: new ArticleStore(),
  DatasetStore: new DatasetStore(),
  FeedStore: new FeedStore(),
  FlashStore: new FlashStore(),
  PaperStore: new PaperStore(),
  ProjectStore: new ProjectStore(),
  RegistrationStore: new RegistrationStore(),
  VideoStore: new VideoStore()
}
