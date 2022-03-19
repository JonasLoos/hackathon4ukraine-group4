from flask import Flask
from flask import request

app = Flask(__name__)


@app.route('/')
def test():
    return {'test': 42}


@app.route('/search/')
def search():
    '''search for entries matching the given filters'''
    language = request.args.get('language', '')
    country = request.args.get('country', '')
    city = request.args.get('city', '')
    # TODO: query mongoDB
    mongo_results = [{'url': 'https://test.com', 'name': 'Test', 'language': language, 'country': country, 'city': city}]  # just for testing
    return {'results': mongo_results}


@app.route('/newentry/')
def newentry():
    keys = ['url', 'name', 'language', 'country', 'city']
    data = {key: request.args.get(key, '') for key in keys}
    # TODO: insert into mongodb (including key "not verified")
    success = all(data.values())  # just for testing
    return {'success': success}
