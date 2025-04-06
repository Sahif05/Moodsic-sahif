from flask import Flask, request, jsonify, redirect
from flask_cors import CORS
import base64
import requests
import os
import numpy as np
import cv2
from keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from dotenv import load_dotenv

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load environment variables
load_dotenv()

# Emotion detection setup
current_dir = os.path.dirname(os.path.abspath(__file__))
face_classifier = cv2.CascadeClassifier(os.path.join(current_dir, 'HaarcascadeclassifierCascadeClassifier.xml'))
classifier = load_model(os.path.join(current_dir, 'model.h5'))
emotion_labels = ['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad', 'Surprise']

# Spotify OAuth2 setup
client_id = os.getenv('SPOTIFY_CLIENT_ID')
client_secret = os.getenv('SPOTIFY_CLIENT_SECRET')
redirect_uri = os.getenv('SPOTIFY_REDIRECT_URI')

# Emotion to music genre mapping
emotion_to_query = {
    'Happy': 'genre:pop',
    'Sad': 'genre:ballad',
    'Angry': 'genre:rock',
    'Fear': 'genre:ambient',
    'Surprise': 'genre:electronic',
    'Neutral': 'genre:instrumental',
    'Disgust': 'genre:industrial',
}

@app.route("/login")
def login():
    scope = "user-library-read playlist-read-private"
    auth_url = (
        "https://accounts.spotify.com/authorize"
        f"?response_type=code&client_id={client_id}"
        f"&redirect_uri={redirect_uri}&scope={scope}"
    )
    return redirect(auth_url)

@app.route("/callback")
def callback():
    code = request.args.get("code")
    if not code:
        return jsonify({"error": "No code provided"}), 400
    
    token = get_access_token(code)
    profile = get_user_profile(token)
    playlists = get_user_playlists(token)
    
    return jsonify({"profile": profile, "playlists": playlists})

def get_access_token(code):
    token_url = "https://accounts.spotify.com/api/token"
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": redirect_uri,
        "client_id": client_id,
        "client_secret": client_secret
    }
    response = requests.post(token_url, headers=headers, data=data)
    if response.status_code == 200:
        return response.json()['access_token']
    else:
        return jsonify({"error": "Failed to get access token"}), 400

def get_user_profile(access_token):
    url = "https://api.spotify.com/v1/me"
    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.get(url, headers=headers)
    return response.json() if response.status_code == 200 else {}

def get_user_playlists(access_token):
    url = "https://api.spotify.com/v1/me/playlists"
    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.get(url, headers=headers)
    return response.json() if response.status_code == 200 else {}

@app.route('/detect-emotion', methods=['POST'])
def detect_emotion():
    try:
        data = request.json
        image_data = data.get('image')
        access_token = data.get('access_token')

        if not image_data or not access_token:
            return jsonify({"error": "Image or access token missing"}), 400

        # Decode the base64 image
        if image_data.startswith('data:image/jpeg;base64,'):
            image_data = image_data.split(',')[1]
        
        image_bytes = base64.b64decode(image_data)
        nparr = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        # Detect emotion
        detected_emotion, confidence = detect_emotion_from_image(frame)
        
        if detected_emotion:
            # Use the emotion_to_query mapping to find a music genre
            query = emotion_to_query.get(detected_emotion)
            if not query:
                return jsonify({"error": "No music found for this emotion"}), 404

            # Get user playlists and search for tracks
            playlists = get_user_playlists(access_token)
            song = None

            # Iterate through the playlists and check for a matching song
            for playlist in playlists:
                for track in playlist['tracks']:
                    # Look for a song that matches the emotion-based query (genre or mood)
                    if query.lower() in track['name'].lower() or query.lower() in track['artist'].lower():
                        song = track
                        break
                if song:
                    break

            if song:
                song_uri = song['uri']
                music_response = play_music(access_token, song_uri)
                return jsonify({"emotion": detected_emotion, "music": music_response})
            else:
                return jsonify({"error": "No song found in your playlists matching the emotion"}), 404
        else:
            return jsonify({"error": "No emotion detected"}), 400
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def detect_emotion_from_image(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_classifier.detectMultiScale(gray)
    
    for (x, y, w, h) in faces:
        roi_gray = gray[y:y + h, x:x + w]
        roi_gray = cv2.resize(roi_gray, (48, 48), interpolation=cv2.INTER_AREA)

        if np.sum([roi_gray]) != 0:
            roi = roi_gray.astype('float') / 255.0
            roi = img_to_array(roi)
            roi = np.expand_dims(roi, axis=0)
            prediction = classifier.predict(roi)[0]
            emotion = emotion_labels[prediction.argmax()]
            confidence = float(prediction[prediction.argmax()])
            return emotion, confidence
    return None, None

def search_song(access_token, query):
    url = "https://api.spotify.com/v1/search"
    headers = {"Authorization": f"Bearer {access_token}"}
    params = {'q': query, 'type': 'track', 'limit': 1}
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code == 200:
        data = response.json()
        if data['tracks']['items']:
            song = data['tracks']['items'][0]
            return {'uri': song['uri'], 'name': song['name'], 'artist': song['artists'][0]['name']}
    return None

def play_music(access_token, song_uri):
    url = "https://api.spotify.com/v1/me/player/play"
    headers = {"Authorization": f"Bearer {access_token}"}
    data = {"uris": [song_uri]}
    response = requests.put(url, headers=headers, json=data)
    
    if response.status_code == 200:
        return {"status": "success", "message": f"Playing {song_uri}"}
    else:
        return {"status": "error", "message": "Failed to start music playback"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)