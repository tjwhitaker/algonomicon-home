import falcon
from api.article import ArticleResource, ArticleCollectionResource
from api.dataset import DatasetResource, DatasetCollectionResource
from api.event   import EventResource,   EventCollectionResource
from api.paper   import PaperResource,   PaperCollectionResource
from api.project import ProjectResource, ProjectCollectionResource
from db import Base, SessionManager, engine, session_factory

api = falcon.API(middleware=[
    SessionManager(session_factory)
])

api.add_route('/article/{id}', ArticleResource())
api.add_route('/articles', ArticleCollectionResource())

api.add_route('/dataset/{id}', DatasetResource())
api.add_route('/datasets', DatasetCollectionResource())

api.add_route('/event/{id}', EventResource())
api.add_route('/events', EventCollectionResource())

api.add_route('/paper/{id}', PaperResource())
api.add_route('/papers', PaperCollectionResource())

api.add_route('/project/{id}', ProjectResource())
api.add_route('/projects', ProjectCollectionResource())

Base.metadata.create_all(bind=engine)
