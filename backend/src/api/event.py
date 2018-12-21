import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class Event(Base):
    __tablename__ = 'event'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    location = Column(String)
    date = Column(String)

class EventSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()
    location = fields.Str()
    date = fields.Str()

class EventResource:
    def on_get(self, req, resp, id):
        event = self.db.query(Event).get(id)

        data, errors = EventSchema().dump(event)
        resp.media = data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        event = self.db.query(Event).get(id)

        event.name = req.media.get('name')
        event.location = req.media.get('location')
        event.date = req.media.get('date')

        self.db.commit()

        data, errors = EventSchema().dump(event)
        resp.media = data

    @falcon.before(validate_god)
    def on_delete(self, req, resp, id):
        self.db.query(Event).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'Event Deleted'}

class EventCollectionResource:
    def on_get(self, req, resp):
        events = self.db.query(Event).all()

        data, errors = EventSchema(many=True).dump(events)
        resp.media = data

    @falcon.before(validate_god)
    def on_post(self, req, resp):
        event = Event(
            name=req.media.get('name'),
            location=req.media.get('location'),
            date=req.media.get('date')
        )

        self.db.add(event)
        self.db.commit()

        data, errors = EventSchema().dump(event)
        resp.media =data