import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql import func
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import DateTime, Integer, String, Text

class Model(Base):
    __tablename__ = 'model'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    slug = Column(String)
    description = Column(Text)
    content = Column(Text)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

class ModelSchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str()
    slug = fields.Str()
    description = fields.Str()
    content = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

class ModelResource:
    def on_get(self, req, resp, id):
        model = self.db.query(Model).get(id)
       
        data, errors = ModelSchema().dump(model)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        model = self.db.query(Model).get(id)
        
        model.name = req.media.get('name')
        model.slug = req.media.get('slug')
        model.description = req.media.get('description')
        
        self.db.commit()

        data, errors = ModelSchema().dump(model)
        resp.media.get('model')

    @falcon.before(validate_god)
    def on_delete(self, req, resp, id):
        self.db.query(Model).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Model Deleted'}

class ModelCollectionResource:
    def on_get(self, req, resp):
        models = self.db.query(Model).all()

        data, errors = ModelSchema(many=True).dump(models)
        resp.media = data

    @falcon.before(validate_god)
    def on_post(self, req, resp):
        model = Model(
            name=req.media.get('name'),
            slug=req.media.get('slug'),
            description=req.media.get('description')
        )

        self.db.add(model)
        self.db.commit()

        data, errors = ModelSchema().dump(model)
        resp.media = data