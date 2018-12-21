import falcon
from auth import AuthManager
from cors import PolicyManager
from db.config import Base, SessionManager, engine, session_factory
from api.article import ArticleResource, ArticleCollectionResource
from api.dataset import DatasetResource, DatasetCollectionResource
from api.event   import EventResource,   EventCollectionResource
from api.model   import ModelResource,   ModelCollectionResource
from api.paper   import PaperResource,   PaperCollectionResource
from api.project import ProjectResource, ProjectCollectionResource
from api.user    import UserResource,    UserCollectionResource

api = falcon.API(middleware=[
    AuthManager(),
    PolicyManager(),
    SessionManager(session_factory)
])

api.add_route('/article/{id}', ArticleResource())
api.add_route('/articles', ArticleCollectionResource())

api.add_route('/dataset/{id}', DatasetResource())
api.add_route('/datasets', DatasetCollectionResource())

api.add_route('/event/{id}', EventResource())
api.add_route('/events', EventCollectionResource())

api.add_route('/model/{id}', ModelResource())
api.add_route('/models', ModelCollectionResource())

api.add_route('/paper/{id}', PaperResource())
api.add_route('/papers', PaperCollectionResource())

api.add_route('/project/{id}', ProjectResource())
api.add_route('/projects', ProjectCollectionResource())

api.add_route('/user/{id}', UserResource())
api.add_route('/users', UserCollectionResource())

Base.metadata.create_all(bind=engine)