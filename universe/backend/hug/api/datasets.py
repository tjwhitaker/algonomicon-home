import hug

@hug.get('/datasets')
def index():
    item = {
        'name': 'Fire Dataset',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'attributes': '23',
        'instances': '1699',
        'format': 'CSV'
    }
    

    return [item for i in range(10)]