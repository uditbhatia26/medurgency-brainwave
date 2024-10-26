# app.py
from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

API_KEY = 'rJkTxP36ksBIeAzvfIw9nYpTcXXxjBOp'
EXTERNAL_USER_ID = 'your_external_user_id_here'  # Replace with actual external user ID

@app.route('/')
def index():
    return render_template('index.html')  # Your existing index page

@app.route('/chatbot')
def chatbot():
    return render_template('chatbot.html')  # New chatbot page

@app.route('/chat', methods=['POST'])
def chat():
    user_query = request.json.get('query')

    try:
        # Step 1: Create Chat Session
        create_session_url = 'https://api.on-demand.io/chat/v1/sessions'
        create_session_headers = {'apikey': API_KEY}
        create_session_body = {
            "pluginIds": [],
            "externalUserId": EXTERNAL_USER_ID
        }

        session_response = requests.post(create_session_url, headers=create_session_headers, json=create_session_body)
        session_response.raise_for_status()
        session_id = session_response.json()['data']['id']

        # Step 2: Submit User Query to the Bot
        submit_query_url = f'https://api.on-demand.io/chat/v1/sessions/{session_id}/query'
        submit_query_headers = {'apikey': API_KEY}
        submit_query_body = {
            "endpointId": "predefined-openai-gpt4o",
            "query": user_query,
            "pluginIds": ["plugin-1717464304"],
            "responseMode": "sync"
        }

        query_response = requests.post(submit_query_url, headers=submit_query_headers, json=submit_query_body)
        query_response.raise_for_status()
        answer = query_response.json()['data']['answer']

        return jsonify({"answer": answer})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"answer": "Sorry, I couldn't process your request."}), 500

if __name__ == '__main__':
    app.run(debug=True)
