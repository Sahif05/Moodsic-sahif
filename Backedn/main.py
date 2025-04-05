from fastapi import FastAPI, Request, HTTPException
import webbrowser
import requests

app = FastAPI()

# Spotify API credentials (make sure to keep them secure)
client_id = "a7c99eebbf6843d383adf6ffa6b93854"  # Replace with your Spotify client_id
client_secret = "a3bc41920291443787dc5f5a7cf5638d"  # Replace with your Spotify client_secret
redirect_uri = "https://moodsic-pink.vercel.app/callback"  # Ensure this matches your Spotify Developer Dashboard
#redirect_uri = "http://127.0.0.1:8000/callback" 

@app.get("/login")
def login():
    scope = "user-library-read playlist-read-private"  # Example scope; adjust as needed

    # Construct the authorization URL
    auth_url = f"https://accounts.spotify.com/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&scope={scope}"

    # Open the URL in the browser to trigger the Spotify login and authorization flow
    webbrowser.open(auth_url)
    return {"message": "Redirecting to Spotify for authorization"}

def get_user_profile(access_token: str):
    # Spotify's endpoint to get user profile
    url = "https://api.spotify.com/v1/me"
    
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail=f"Failed to fetch user profile: {response.text}")

def get_user_playlists(access_token: str):
    url = "https://api.spotify.com/v1/me/playlists"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Failed to fetch playlists", "details": response.json()}

def refresh_access_token(refresh_token: str):
    token_url = "https://accounts.spotify.com/api/token"
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "grant_type": "refresh_token",
        "refresh_token": refresh_token,
        "client_id": client_id,
        "client_secret": client_secret
    }

    response = requests.post(token_url, headers=headers, data=data)
    if response.status_code == 200:
        return response.json()['access_token']
    else:
        raise HTTPException(status_code=response.status_code, detail=f"Failed to refresh access token: {response.text}")

# Simple root route
@app.get("/")
def read_root():
    return {"message": "Welcome to the Spotify integration API!"}

# This will handle Spotify's redirect after the user logs in
@app.get("/callback")
async def callback(request: Request):
    code = request.query_params.get("code")
    
    if not code:
        raise HTTPException(status_code=400, detail="No authorization code found")

    token = await get_access_token(code)
    profile = get_user_profile(token)  # Fetch the user profile using the access token
    playlists = get_user_playlists(token)

    return {"message": "User profile and playlists fetched", "access_token": token, "profile": profile, "playlists": playlists}

# Function to exchange the authorization code for an access token
async def get_access_token(code: str):
    token_url = "https://accounts.spotify.com/api/token"
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": redirect_uri,
        "client_id": client_id,
        "client_secret": client_secret
    }

    # Send the request to Spotify to exchange the code for an access token
    response = requests.post(token_url, headers=headers, data=data)
    if response.status_code == 200:
        token_info = response.json()
        return token_info['access_token']
    else:
        raise HTTPException(status_code=response.status_code, detail=f"Failed to get access token: {response.text}")