import hug

from src.context import DBContext
from src.models.user import User

@hug.authentication.basic()
def basic_authentication(username, password, context: DBContext):
    return context.db.query(exists().where(
        User.username == username,
        User.password == password
    ).scalar()
