from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from src.models.base import Base

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)