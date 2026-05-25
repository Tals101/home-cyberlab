from flask import Flask
import os
import subprocess

app = Flask(__name__)

@app.route("/")
def home():
    return {"status": "running"}

@app.route("/whoami")
def whoami():
    return {
        "user": subprocess.getoutput("whoami"),
        "uid": os.getuid()
    }

@app.route("/env")
def env():
    return dict(os.environ)