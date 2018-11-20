import hug
from src.api import articles, datasets, events, papers, projects
from src.context import DBContext, engine
from src.models.base import Base

@hug.context_factory()
def create_context(*args, **kwargs):
  return DBContext()

@hug.delete_context()
def delete_context(context: DBContext, exception=None, errors=None, lacks_requirement=None):
  context.cleanup(exception)

@hug.extend_api()
def routes():
  return [articles, datasets, events, papers, projects]

Base.metadata.create_all(bind=engine)