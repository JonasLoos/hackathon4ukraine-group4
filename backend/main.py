from flask import Flask

app = Flask(__name__)


@app.route('/')
def get_current_time():
    return {'test': 42}
