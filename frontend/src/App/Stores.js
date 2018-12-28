import ArticleStore from '../Article/ArticleStore'
import DatasetStore from '../Dataset/DatasetStore'
import EventStore from '../Event/EventStore'
import FeedStore from '../Home/Feed/FeedStore'
import FlashStore from '../Layouts/Flash/FlashStore'
import ModelStore from '../Model/ModelStore'
import PaperStore from '../Paper/PaperStore'
import ProjectStore from '../Project/ProjectStore'

export default {
  ArticleStore: new ArticleStore(),
  DatasetStore: new DatasetStore(),
  EventStore: new EventStore(),
  FeedStore: new FeedStore(),
  FlashStore: new FlashStore(),
  ModelStore: new ModelStore(),
  PaperStore: new PaperStore(),
  ProjectStore: new ProjectStore()
}
