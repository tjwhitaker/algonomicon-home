import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql import func
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import DateTime, Integer, String, Text

class Dataset(Base):
    __tablename__ = 'dataset'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    slug = Column(String)
    description = Column(Text)
    content = Column(Text)
    instances = Column(Integer)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())


class DatasetSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()
    slug = fields.Str()
    description = fields.Str()
    content = fields.Str()
    instances = fields.Int()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

class DatasetResource:
    def on_get(self, req, resp, id):
        dataset = self.db.query(Dataset).get(id)

        data, errors = DatasetSchema().dump(dataset)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        dataset = self.db.query(Dataset).get(id)

        dataset.name = req.media.get('name')
        dataset.slug = req.media.get('slug')
        dataset.description = req.media.get('description')
        dataset.content = req.media.get('content')
        dataset.instances = req.media.get('instances')

        self.db.commit()

        data, errors = DatasetSchema().dump(dataset)
        resp.media = data

    @falcon.before(validate_god)
    def on_delete(self, req, resp, id):
        self.db.query(Dataset).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Dataset Deleted'}

class DatasetCollectionResource:
    def on_get(self, req, resp):
        datasets = self.db.query(Dataset).all()

        data, errors = DatasetSchema(many=True).dump(datasets)
        resp.media = data

    @falcon.before(validate_god)
    def on_post(self, req, resp):
        dataset = Dataset(
            name=req.media.get('name'),
            slug=req.media.get('slug'),
            description=req.media.get('description'),
            content=req.media.get('content'),
            instances=req.media.get('instances')
        )

        self.db.add(dataset)
        self.db.commit()

        data, errors = DatasetSchema().dump(dataset)
        resp.media =data