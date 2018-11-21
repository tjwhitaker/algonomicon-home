import hug

@hug.get('/papers')
def index():
    item = {
        'title': 'Hello World',
        'abstract': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ex deserunt temporibus, quas cum unde, dolor harum corporis! A eos necessitatibus deleniti mollitia animi beatae reprehenderit maiores, asperiores, blanditiis quam.'
    }

    return [item for i in range(10)]