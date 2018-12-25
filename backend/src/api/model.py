import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class Model(Base):
    __tablename__ = 'model'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)

class ModelSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()
    description = fields.Str()

class ModelResource:
    def on_get(self, req, resp, id):
        model = self.db.query(Model).get(id)
       
        data, errors = ModelSchema().dump(model)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        model = self.db.query(Model).get(id)
        
        model.name = req.media.get('name')
        
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
            description=req.media.get('description')
        )

        self.db.add(model)
        self.db.commit()

        data, errors = ModelSchema().dump(model)
        resp.media = data