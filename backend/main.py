from flask import Flask
from flask import request
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient()
# db = client['database-name']

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
    results = [{'url': 'https://test.com', 'name': 'Test', 'language': language, 'country': country, 'city': city}]  # just for testing
    return {'results': results}


@app.route('/regions/')
def regions():
    '''get available regions'''
    # TODO: query mongoDB
    results = ['Poland', 'Ukraine', 'Border Ukraine-Poland', 'London']  # just for testing
    return {'regions': results}


@app.route('/languages/')
def languages():
    '''get available languages'''
    # TODO: query mongoDB
    results = ['English', 'Ukrainian', 'Polish', 'German']  # just for testing
    return {'languages': results}


@app.route('/newentry/')
def newentry():
    keys = ['url', 'name', 'language', 'country', 'city']
    data = {key: request.args.get(key, '') for key in keys}
    # TODO: insert into mongodb (including key "not verified")
    success = all(data.values())  # just for testing
    return {'success': success}
