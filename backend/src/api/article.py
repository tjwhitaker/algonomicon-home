import falcon
import datetime
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql import func
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import DateTime, Integer, String, Text

class Article(Base):
    __tablename__ = 'article'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    slug = Column(String)
    description = Column(Text)
    content = Column(Text)
    hero = Column(String)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

class ArticleSchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str()
    slug = fields.Str()
    description = fields.Str()
    content = fields.Str()
    hero = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

class ArticleResource:
    def on_get(self, req, resp, id):
        article = self.db.query(Article).get(id)
        
        data, errors = ArticleSchema().dump(article)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        article = self.db.query(Article).get(id)

        article.name = req.media.get('name')
        article.slug = req.media.get('slug')
        article.description = req.media.get('description')
        article.content = req.media.get('content')
        article.hero = req.media.get('hero')

        self.db.commit()

        data, errors = ArticleSchema().dump(article)
        resp.media = data

    @falcon.before(validate_god)
    def on_delete(self, req, resp, id):
        self.db.query(Article).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Article Deleted'}
        
class ArticleCollectionResource:    
    def on_get(self, req, resp):
        articles = self.db.query(Article).all()

        data, errors = ArticleSchema(many=True).dump(articles)
        resp.media = data

    @falcon.before(validate_god)
    def on_post(self, req, resp):
        article = Article(
            name=req.media.get('name'),
            slug=req.media.get('slug'),
            description = req.media.get('description'),
            content=req.media.get('content'),
            hero=req.media.get('hero')
        ) 

        self.db.add(article)
        self.db.commit()

        data, errors = ArticleSchema().dump(article)
        resp.media = data
