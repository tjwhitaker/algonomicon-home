import hug

@hug.get('/projects')
def index():
    item = {
        'preview': 'https://source.unsplash.com/600x300',
        'title': 'Hello World',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ex deserunt temporibus, quas cum unde, dolor harum corporis! A eos necessitatibus deleniti mollitia animi beatae reprehenderit maiores, asperiores, blanditiis quam.'
    }

    return [item for i in range(5)]