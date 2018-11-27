import requests

url = 'http://localhost:8000'
data = {"name": "Value"}
r = requests.post(url, auth=('username', 'password'), verify=False, json=data)
print(r.status_code)
