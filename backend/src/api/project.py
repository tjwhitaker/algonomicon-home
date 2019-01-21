import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql import func
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import DateTime, Integer, String, Text

class Project(Base):
    __tablename__ = 'project'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    slug = Column(String)
    description = Column(Text)
    content = Column(Text)
    hero = Column(String)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

class ProjectSchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str()
    slug = fields.Str()
    description = fields.Str()
    content = fields.Str()
    hero = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

class ProjectResource:
    def on_get(self, req, resp, id):
        project = self.db.query(Project).get(id)

        data, errors = ProjectSchema().dump(project)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        project = self.db.query(Project).get(id)

        project.name = req.media.get('name')
        project.slug = req.media.get('slug')
        project.description = req.media.get('description')
        project.content = req.media.get('content')
        project.hero = req.media.get('hero')

        self.db.commit()

        data, errors = ProjectSchema().dump(project)
        resp.media = data

    @falcon.before(validate_god)
    def on_delete(self, req, resp, id):
        self.db.query(Project).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Project Deleted'}

class ProjectCollectionResource:
    def on_get(self, req, resp):
        projects = self.db.query(Project).all()

        data, errors = ProjectSchema(many=True).dump(projects)
        resp.media = data

    @falcon.before(validate_god)
    def on_post(self, req, resp):
        project = Project(
            name=req.media.get('name'),
            slug=req.media.get('slug'),
            description=req.media.get('description'),
            content=req.media.get('content'),
            hero=req.media.get('hero')
        )

        self.db.add(project)
        self.db.commit()

        data, errors = ProjectSchema().dump(project)
        resp.media =data