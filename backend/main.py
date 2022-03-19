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
    return {'results': ['...']}


@app.route('/newentry')
def newentry():
    return {}
