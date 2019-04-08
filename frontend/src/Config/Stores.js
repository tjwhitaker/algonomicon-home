import ArticleStore from '../Stores/ArticleStore'
import DatasetStore from '../Stores/DatasetStore'
import FeedStore from '../Contexts/Home/Sidebar/Feed/FeedStore'
import FlashStore from '../Shared/Layout/App/Flash/FlashStore'
import PaperStore from '../Stores/PaperStore'
import ProjectStore from '../Stores/ProjectStore'
import RegistrationStore from '../Shared/Layout/App/Header/Content/Registration/RegistrationStore'
import VideoStore from '../Stores/VideoStore'

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
