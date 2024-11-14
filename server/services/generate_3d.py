# Python Libraries
import requests
import json
import logging

# User defined methods
from services.prompt_generator import prompt_improver
from config import development


def generate3D(prompt: str):

    refined_prompt = prompt_improver(prompt)
    logging.warning(f"Prompt received in the generated_3d: {refined_prompt}")

    api_endpoint = development.STABLE_API_ENDPOINT

    payload = json.dumps({
        "key": development.STABLE_API_KEY,
        "prompt": refined_prompt,
        "guidance_scale": 20,
        "steps": 64,
        "frame_size": 256,
        "output_type": "ply",
        "webhook": None,
        "track_id": None
    })

    response = requests.request(
        "POST", api_endpoint, headers=development.headers, data=payload)

    return response
