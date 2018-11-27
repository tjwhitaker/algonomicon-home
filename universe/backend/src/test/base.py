from falcon import testing

class APITestCase(testing.Testcase):
    def setup(self):
        super(APITestCase, self).setUp()