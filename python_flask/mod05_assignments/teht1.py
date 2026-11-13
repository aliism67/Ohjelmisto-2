from flask import Flask

app = Flask(__name__)

#(http://127.0.0.1:3000/prime_number/3)
@app.route('/prime_number/<num>')

def is_prime_number(num):
    isPrime = True
    num = int(num)
    if num % 2 != 0:
        isPrime = False
    response = {
        "number" : num,
        "isPrime" : isPrime
    }
    return response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)