# Python Libraries
from autogen import AssistantAgent

# User defined methods
from config import development

llm_config = {
    "model": "gemma-7b-it",
    "api_key": development.GROQ_API_KEY,
    "api_type": "groq",
    "timeout":120,
}


'''
Prompt Improver Agent
'''
prompt_improver_agent = AssistantAgent(
    name="Render3D Prompt Improver Agent",
    system_message='''You are a specialized assistant designed to improve prompts for generating 3D models. Please enhance the prompt provided by the user, focusing on clarity and detail, suitable for 3D generation. Do not give keywords, only give the enhanced prompt, nothing else.''',
    llm_config=llm_config,
    human_input_mode="NEVER"
)


def prompt_improver(prompt):

    support_request = {
        "content": prompt,
        "role": "user",
    }

    reply = prompt_improver_agent.generate_reply(messages=[support_request])

    return reply['content']
