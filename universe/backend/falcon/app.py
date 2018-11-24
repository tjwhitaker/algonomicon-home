import falcon
from api.article import ArticleResource, ArticleCollectionResource
from db import Base, SessionManager, engine, session_factory

api = falcon.API(middleware=[
    SessionManager(session_factory)
])

api.add_route('/article/{id}', ArticleResource())
api.add_route('/articles', ArticleCollectionResource())


Base.metadata.create_all(bind=engine)