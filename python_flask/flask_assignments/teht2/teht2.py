import json

from flask import Flask, request, Response

app = Flask(__name__)

##(http://127.0.0.1:3000/translate/friday)
@app.route('/translate/<word>')
def translate(word):
        word = word.lower()
        with open("python_flask/flask_assignments/teht2/dictionary.json", "r") as file:
            data = json.load(file)
            if word in data:
                response = {
                    "English": word,
                    "Finnish": data[word]
                }
                return response
            else:
                return {
                     "error": "Word not found"
                     }, 404
                
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)