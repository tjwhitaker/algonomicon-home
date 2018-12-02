from db.config import Base
from marshmallow import Schema, fields
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import Integer, String, Text

class User(Base):
    __tablename__ = 'project'
    id = Column(Integer, primary_key=True)
    email = Column(String)

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    email = fields.Str()

class UserResource(object):
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

class UserCollectionResource(object):
    def on_get(self, req, resp):
        users = self.db.query(User).all()

        data, errors = UserSchema(many=True).dump(users)
        resp.media = data

    def on_post(self, req, resp):
        user = User(
            name=req.media.get('name'),
            description=req.media.get('description'),
            preview=req.media.get('preview')
        )

        self.db.add(user)
        self.db.commit()

        data, errors = UserSchema().dump(user)
        resp.media =data