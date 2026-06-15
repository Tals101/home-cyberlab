from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "message": "Secure Software Supply Chain Demo",
        "status": "running"
    })

@app.route("/health")
def health():
    return jsonify({
        "status": "healthy"
    })
