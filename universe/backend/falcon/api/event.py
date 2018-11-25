from db import Base
from marshmallow import Schema, fields
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class Event(Base):
    __tablename__ = 'event'
    id = Column(Integer, primary_key=True)
    name = Column(String)

class EventSchema(Schema):
    id = fields.Int(dump_only=True)
    name = field.Str()

class EventResource(object):
    def on_get(self, req, resp, id):
        event = self.db.query(Event).get(id)

        data, errors = EventSchema().dump(event)
        resp.media = data

    def on_put(self, req, resp, id):
        event = self.db.query(Event).get(id)

        event.name = req.media.get('name')

        self.db.commit()

        data, errors = EventSchema().dump(event)
        resp.media = data

    def on_delete(self, req, resp, id):
        self.db.query(Event).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Event Deleted'}

class EventCollectionResource(object):
    def on_get(self, req, resp):
        events = self.db.query(Event).all()

        data, errors = EventSchema(many=True).dump(events)
        resp.media = data

    def on_post(self, req, resp):
        event = Event(
            name=req.media.get('name')
        )

        self.db.add(event)
        self.db.commit()

        data, errors = EventSchema().dump(event)
        resp.media =data