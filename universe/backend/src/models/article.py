from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from src.models.base import Base

class Article(Base):
  __tablename__ = 'article'
  id = Column(Integer, primary_key=True)