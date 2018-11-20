import hug

@hug.get()
def hello(name: str):
    return 'Hello %s' % name
