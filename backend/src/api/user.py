import falcon
from auth import validate_god
from db.config import Base
from marshmallow import Schema, ValidationError, fields, post_load
from sqlalchemy.sql import func
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import DateTime, Integer, String, Text

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())

class UserSchema(Schema):
    id = fields.Str(dump_only=True)
    email = fields.Email()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()

    @post_load
    def make_user(self, data):
        return User(**data)

class UserResource:
    def on_get(self, req, resp, id):
        user = self.db.query(User).get(id)

        result = UserSchema().dump(user)
        resp.media = result.data

    @falcon.before(validate_god)
    def on_put(self, req, resp, id):
        user = self.db.query(User).get(id)

        user.email = req.media.get('email')

        self.db.commit()

        result = UserSchema().dump(user)
        resp.media = result.data

    @falcon.before(validate_god)
    def on_delete(self, req, resp, id):
        try:
            self.db.query(User).get(id).delete()
            self.db.commit()
        except:
            resp.media = {'message': 'There was a problem.'}            

class UserCollectionResource:
    def on_get(self, req, resp):
        users = self.db.query(User).all()

        result = UserSchema(many=True).dump(users)
        resp.media = result.data

    @falcon.before(validate_god)
    def on_post(self, req, resp):
        try:
            user = UserSchema().load(req.media)
            self.db.add(user.data)
            self.db.commit()
        except:
            resp.media = {'message': 'There was a problem.'}
