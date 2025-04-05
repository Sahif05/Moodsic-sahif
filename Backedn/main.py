from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import RedirectResponse
from dotenv import load_dotenv
import webbrowser
import requests
import os

app = FastAPI()

load_dotenv() 

client_id = os.getenv("SPOTIFY_CLIENT_ID")
client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
redirect_uri = os.getenv("SPOTIFY_REDIRECT_URI")

@app.get("/login")
def login():
    scope = "user-library-read playlist-read-private"
    auth_url = (
        f"https://accounts.spotify.com/authorize?"
        f"response_type=code&client_id={client_id}&"
        f"redirect_uri={redirect_uri}&scope={scope}"
    )

    return RedirectResponse(auth_url)

def get_user_profile(access_token: str):
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

@app.get("/")
def read_root():
    return {"message": "Welcome to the Spotify integration API!"}

@app.get("/callback")
async def callback(request: Request):
    code = request.query_params.get("code")
    
    if not code:
        raise HTTPException(status_code=400, detail="No authorization code found")

    token = await get_access_token(code)
    profile = get_user_profile(token)  
    playlists = get_user_playlists(token)

    return {"message": "User profile and playlists fetched", "access_token": token, "profile": profile, "playlists": playlists}

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

    response = requests.post(token_url, headers=headers, data=data)
    if response.status_code == 200:
        token_info = response.json()
        return token_info['access_token']
    else:
        raise HTTPException(status_code=response.status_code, detail=f"Failed to get access token: {response.text}")