import json
from db import Base
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String

class Article(Base):
    __tablename__ = 'article'
    id = Column(Integer, primary_key=True)
    title = Column(String)

class ArticleResource(object):
    def on_get(self, req, resp, id):
        item = Article(title='hello world') 

        self.db.add(item)
        self.db.commit()

        resp.media = self.db.query(Article).first().title
        
class ArticleCollectionResource(object):    
    def on_get(self, req, resp):
        item = {
            'preview': 'https://source.unsplash.com/600x300',
            'title': 'Hello!',
            'description': 'This is a test description of a fake article post'
        }

        resp.media = [item for i in range(10)]
