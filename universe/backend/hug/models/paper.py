from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from src.models.base import Base

class Paper(Base):
    __tablename__ = 'paper'
    id = Column(Integer, primary_key=True)