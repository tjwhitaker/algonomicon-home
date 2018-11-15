import ArticleStore from '../Articles/ArticleStore'
import DatasetStore from '../Datasets/DatasetStore'
import EventStore from '../Events/EventStore'
import PaperStore from '../Papers/PaperStore'
import ProjectStore from '../Projects/ProjectStore'

export default {
  ArticleStore: new ArticleStore(),
  DatasetStore: new DatasetStore(),
  EventStore: new EventStore(),
  PaperStore: new PaperStore(),
  ProjectStore: new ProjectStore()
}
