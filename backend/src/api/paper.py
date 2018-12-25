import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql import func
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import DateTime, Integer, String, Text

class Paper(Base):
    __tablename__ = 'paper'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    abstract = Column(String)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

class PaperSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()
    abstract = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

class PaperResource:
    def on_get(self, req, resp, id):
        paper = self.db.query(Paper).get(id)

        data, errors = PaperSchema().dump(paper)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        paper = self.db.query(Paper).get(id)

        paper.name = req.media.get('name')
        paper.abstract = req.media.get('abstract')

        self.db.commit()

        data, errors = PaperSchema().dump(paper)
        resp.media = data

    @falcon.before(validate_god)
    def on_delete(self, req, resp, id):
        self.db.query(Paper).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Paper Deleted'}

class PaperCollectionResource:
    def on_get(self, req, resp):
        papers = self.db.query(Paper).all()

        data, errors = PaperSchema(many=True).dump(papers)
        resp.media = data

    @falcon.before(validate_god)
    def on_post(self, req, resp):
        paper = Paper(
            name=req.media.get('name'),
            abstract=req.media.get('abstract')
        )

        self.db.add(paper)
        self.db.commit()

        data, errors = PaperSchema().dump(paper)
        resp.media = data