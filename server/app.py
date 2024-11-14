from flask import Flask
from flask_cors import CORS

from routes.generate_3d_route import generate_3d_blueprint

app = Flask(__name__)

CORS(app)

app.register_blueprint(generate_3d_blueprint, url_prefix="/api/v1")

if __name__ == '__main__':
    app.run(debug=True)
