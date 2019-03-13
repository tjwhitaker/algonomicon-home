import ArticleStore from '../Contexts/Article/ArticleStore'
import DatasetStore from '../Contexts/Dataset/DatasetStore'
import EventStore from '../Contexts/Event/EventStore'
import FeedStore from '../Static/Pages/Home/Sidebar/Feed/FeedStore'
import FlashStore from '../Shared/Layout/Flash/FlashStore'
import PaperStore from '../Contexts/Paper/PaperStore'
import ProjectStore from '../Contexts/Project/ProjectStore'
import RegistrationStore from '../Shared/Layout/Header/Content/Registration/RegistrationStore'
import VideoStore from '../Contexts/Video/VideoStore'

export default {
  ArticleStore: new ArticleStore(),
  DatasetStore: new DatasetStore(),
  EventStore: new EventStore(),
  FeedStore: new FeedStore(),
  FlashStore: new FlashStore(),
  PaperStore: new PaperStore(),
  ProjectStore: new ProjectStore(),
  RegistrationStore: new RegistrationStore(),
  VideoStore: new VideoStore()
}
