import hug

@hug.get('/articles')
def index():
    item = {
        'preview': 'https://source.unsplash.com/600x300',
        'title': 'Hello!',
        'description': 'This is a test description of a fake article post'
    }

    return [item for i in range(10)]