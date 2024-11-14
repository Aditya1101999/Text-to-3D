from flask import Blueprint, request, jsonify
from services.generate_3d import generate3D
import logging

generate_3d_blueprint = Blueprint('generated_3d', __name__)


@generate_3d_blueprint.post('/generate-3d')
def generate_3d_route():
    data = request.get_json()

    prompt = data.get('prompt', "")

    logging.warning(f"Prompt received in the generated_3d_route: {prompt}")

    if not prompt:
        return jsonify({"error": "Prompt is required for the generation of 3D Model"}), 400

    logging.warning(f"Recieved Prompt: {prompt}")

    try:
        response = generate3D(prompt)
        if response.status_code == 200:
            return jsonify(response.json()), 200
        else:
            return jsonify({"error": "Failed to generate 3D Model"}), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500
