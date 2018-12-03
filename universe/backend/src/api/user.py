from db.config import Base
from marshmallow import Schema, ValidationError, fields, post_load
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    email = fields.Email()

    @post_load
    def make_user(self, data):
        return User(**data)

class UserResource:
    def on_get(self, req, resp, id):
        user = self.db.query(User).get(id)

        data, errors = UserSchema().dump(user)
        resp.media = data

    def on_put(self, req, resp, id):
        user = self.db.query(User).get(id)

        user.email = req.media.get('email')

        self.db.commit()

        data, errors = UserSchema().dump(user)
        resp.media = data

    def on_delete(self, req, resp, id):
        self.db.query(User).get(id).delete()
        self.db.commit()

        resp.media = {'message': 'User Deleted'}

class UserCollectionResource:
    def on_get(self, req, resp):
        users = self.db.query(User).all()

        data, errors = UserSchema(many=True).dump(users)
        resp.media = data

    def on_post(self, req, resp):
        try:
            user = UserSchema().load(req.media)
                
            self.db.add(user.data)
            self.db.commit()

            resp.media = {'message': 'success'}
        except ValidationError as err:
            resp.media = err.messages
