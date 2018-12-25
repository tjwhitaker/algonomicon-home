import falcon
from api.article import Article 
from api.dataset import Dataset
from api.event   import Event
from api.model   import Model
from api.paper   import Paper
from api.project import Project

class FeedResource:
    def on_get(self, req, resp):
        items = self.db.query(Article, Dataset, Event, Model, Paper, Project).all()

        print(items)