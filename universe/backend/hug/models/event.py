from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from src.models.base import Base

class Event(Base):
    __tablename__ = 'event'
    id = Column(Integer, primary_key=True)