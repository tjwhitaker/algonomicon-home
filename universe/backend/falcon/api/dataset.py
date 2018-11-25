from db import Base
from marshmallow import Schema, fields
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class Dataset(Base):
    __tablename__ = 'dataset'
    id = Column(Integer, primary_key=True)
    name = Column(String)

class DatasetSchema(Schema):
    id = fields.Int(dump_only=True)
    name = field.Str()

class DatasetResource(object):
    def on_get(self, req, resp, id):
        dataset = self.db.query(Dataset).get(id)

        data, errors = DatasetSchema().dump(dataset)
        resp.media = data

    def on_put(self, req, resp, id):
        dataset = self.db.query(Dataset).get(id)

        dataset.name = req.media.get('name')

        self.db.commit()

        data, errors = DatasetSchema().dump(dataset)
        resp.media = data

    def on_delete(self, req, resp, id):
        self.db.query(Dataset).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Dataset Deleted'}

class DatasetCollectionResource(object):
    def on_get(self, req, resp):
        datasets = self.db.query(Dataset).all()

        data, errors = DatasetSchema(many=True).dump(datasets)
        resp.media = data

    def on_post(self, req, resp):
        dataset = Dataset(
            name=req.media.get('name')
        )

        self.db.add(dataset)
        self.db.commit()

        data, errors = DatasetSchema().dump(dataset)
        resp.media =data