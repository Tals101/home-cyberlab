from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/health")
def health():
    return jsonify({
        "status": "ok",
        "service": "secure-cicd-docker-pipeline"
    }), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
