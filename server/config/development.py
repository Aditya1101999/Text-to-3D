import os
from dotenv import load_dotenv

load_dotenv('./.env')

STABLE_API_KEY = os.getenv('STABLE_API_KEY')
STABLE_API_ENDPOINT = "https://stablediffusionapi.com/api/v3/txt_to_3d"
GROQ_API_KEY = os.getenv('GROQ_API_KEY')
headers = {
    "Content-Type": "application/json"
}
