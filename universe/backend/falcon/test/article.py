from test.base import APITestCase

class TestArticle(APITestCase):
    def test_get_article_collection():
        simulate_get('/articles')

    def test_post_article_collection():
        data = {}
        simulate_post('/articles', data)

    def test_get_article():
        simulate_get('/article/id')

    def test_put_article():
        data = {}
        simulate_put('/article/id', data)

    def test_delete_article():
        simulate_delete('/article/id')