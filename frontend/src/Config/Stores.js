import ArticleStore from '../Contexts/Article/ArticleStore'
import DatasetStore from '../Contexts/Dataset/DatasetStore'
import EventStore from '../Contexts/Event/EventStore'
import FeedStore from '../Static/Pages/Home/Feed/FeedStore'
import FlashStore from '../Shared/Flash/FlashStore'
import PaperStore from '../Contexts/Paper/PaperStore'
import ProjectStore from '../Contexts/Project/ProjectStore'

export default {
  ArticleStore: new ArticleStore(),
  DatasetStore: new DatasetStore(),
  EventStore: new EventStore(),
  FeedStore: new FeedStore(),
  FlashStore: new FlashStore(),
  PaperStore: new PaperStore(),
  ProjectStore: new ProjectStore()
}
