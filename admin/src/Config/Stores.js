import ArticleStore from '../Contexts/Article/ArticleStore'
import DatasetStore from '../Contexts/Dataset/DatasetStore'
import EventStore from '../Contexts/Event/EventStore'
import ModelStore from '../Contexts/Model/ModelStore'
import PaperStore from '../Contexts/Paper/PaperStore'
import ProjectStore from '../Contexts/Project/ProjectStore'

export default {
  ArticleStore: new ArticleStore(),
  DatasetStore: new DatasetStore(),
  EventStore: new EventStore(),
  ModelStore: new ModelStore(),
  PaperStore: new PaperStore(),
  ProjectStore: new ProjectStore()
}
