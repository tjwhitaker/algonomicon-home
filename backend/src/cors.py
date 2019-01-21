class PolicyManager:
    def process_request(self, req, resp):
        resp.set_header('Access-Control-Allow-Origin', '*')
        resp.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        resp.set_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        resp.set_header('Access-Control-Max-Age', 1728000)  # 20 days
