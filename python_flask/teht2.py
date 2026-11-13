import json

from flask import Flask, request, Response

app = Flask(__name__)



if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)