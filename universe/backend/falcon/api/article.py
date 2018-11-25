import json
from db import Base
from marshmallow import Schema, fields
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class Article(Base):
    __tablename__ = 'article'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(Text)
    hero = Column(String)

class ArticleSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str()
    description = fields.Str()
    hero = fields.Str()

class ArticleResource(object):
    def on_get(self, req, resp, id):
        article = self.db.query(Article).get(id)
        data, errors = ArticleSchema().dump(article)
        resp.media = data

    def on_put(self, req, resp, id):
        article = self.db.query(Article).get(id)
        article.title = req.media.get('title')
        article.description = req.media.get('description')
        article.hero = req.media.get('hero')

        self.db.commit()

        data, errors = ArticleSchema().dump(article)
        resp.media = data

    def on_delete(self, req, resp, id):
        self.db.query(Article).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Article Deleted'}
        
class ArticleCollectionResource(object):    
    def on_get(self, req, resp):
        articles = self.db.query(Article).all()
        data, errors = ArticleSchema(many=True).dump(articles)
        resp.media = data

    def on_post(self, req, resp):
        article = Article(
            title=req.media.get('title'),
            description = req.media.get('description'),
            hero=req.media.get('hero')
        ) 

        self.db.add(article)
        self.db.commit()

        data, errors = ArticleSchema().dump(article)
        resp.media = data
