import hug
from src.api import articles, datasets, events, papers, projects
from src.context import DBContext, engine
from src.models.base import Base

@hug.response_middleware()
def process_data(request, response, resource):
      response.set_header('Access-Control-Allow-Origin', '*')
      
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