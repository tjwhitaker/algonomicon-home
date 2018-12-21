import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class Project(Base):
    __tablename__ = 'project'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    preview = Column(String)

class ProjectSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()
    description = fields.Str()
    preview = fields.Str()

class ProjectResource:
    def on_get(self, req, resp, id):
        project = self.db.query(Project).get(id)

        data, errors = ProjectSchema().dump(project)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        project = self.db.query(Project).get(id)

        project.name = req.media.get('name')
        project.description = req.media.get('description')
        project.preview = req.media.get('preview')

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
            description=req.media.get('description'),
            preview=req.media.get('preview')
        )

        self.db.add(project)
        self.db.commit()

        data, errors = ProjectSchema().dump(project)
        resp.media =data