import falcon

class AuthManager:
    def process_request(self, req, resp):
        req.context['god'] = req.auth == 'test'

def validate_god(req, resp, resource, params):
    if not req.context['god']:
        raise falcon.HTTPBadRequest('Not authorized', 'You are not god')
