from sqlalchemy.engine import create_engine
from sqlalchemy.ext.declarative.api import declarative_base
from sqlalchemy.orm.scoping import scoped_session
from sqlalchemy.orm.session import sessionmaker, Session

Base = declarative_base()
engine = create_engine('sqlite:///:memory:')
session_factory = scoped_session(sessionmaker(bind=engine))

class SessionManager:
    def __init__(self, session_factory):
        self.db = session_factory

    def process_resource(self, req, resp, resource, params):
        resource.db = self.db()

    def process_response(self, req, resp, resource, req_succeeded):
        if hasattr(resource, 'db'):
            if not req_succeeded:
                resource.db.rollback()
            self.db.remove()