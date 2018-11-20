from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from src.models.base import Base

class Project(Base):
  __tablename__ = 'project'
  id = Column(Integer, primary_key=True)