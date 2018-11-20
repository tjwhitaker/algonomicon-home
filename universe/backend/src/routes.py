import hug

@hug.get()
def hello(name: str):
  return {'data': 'Hello %s' % name}