import falcon
from api.article import Article, ArticleSchema
from api.dataset import Dataset, DatasetSchema
from api.event   import Event, EventSchema
from api.model   import Model, ModelSchema
from api.paper   import Paper, PaperSchema
from api.project import Project, ProjectSchema

class FeedResource:
    def on_get(self, req, resp):
        articles, _ = ArticleSchema(many=True).dump(self.db.query(Article).all())
        datasets, _ = DatasetSchema(many=True).dump(self.db.query(Dataset).all())
        events, _ = EventSchema(many=True).dump(self.db.query(Event).all())
        models, _ = ModelSchema(many=True).dump(self.db.query(Model).all())
        papers, _ = PaperSchema(many=True).dump(self.db.query(Paper).all())
        projects, _ = ProjectSchema(many=True).dump(self.db.query(Project).all())

        [article.update({'type':'article'}) for article in articles]
        [dataset.update({'type':'dataset'}) for dataset in datasets]
        [event.update({'type':'event'}) for event in events]
        [model.update({'type':'model'}) for model in models]
        [paper.update({'type':'paper'}) for paper in papers]
        [project.update({'type':'project'}) for project in projects]

        items = articles + datasets + events + models + papers + projects

        resp.media = sorted(items, key=lambda x: x['created_at']) 
