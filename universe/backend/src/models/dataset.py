from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer
from src.models.base import Base

class Dataset(Base):
    __tablename__ = 'dataset'
    id = Column(Integer, primary_key=True)