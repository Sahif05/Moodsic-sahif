import requests
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import textwrap, json
import ctypes
import time
import base64
from requests_oauthlib import OAuth2Session
from requests.auth import HTTPBasicAuth
from flask import request

# client_id = '448d3cc4c53f4fab80c7a5c34c42e671'
# client_secret = '4b5fef1a4d91424e8daa672e195d9e1d'

# # Step 1 - Authorization 
# url = "https://accounts.spotify.com/api/token"
# headers = {}
# data = {}

# # Encode as Base64
# message = f"{client_id}:{client_secret}"
# messageBytes = message.encode('ascii')
# base64Bytes = base64.b64encode(messageBytes)
# base64Message = base64Bytes.decode('ascii')


# headers['Authorization'] = f"Basic {base64Message}"
# data['grant_type'] = "client_credentials"


# r = requests.post(url, headers=headers, data=data)
# print(r.json())
# token = r.json()['access_token']

AUTH_URL = 'https://accounts.spotify.com/authorize'
TOKEN_URL = 'https://accounts.spotify.com/api/token'
REDIRECT_URI = 'http://localhost:3000/callback' # my case is 'http://localhost:3000/callback'
SCOPE = [
    
]

spotify = OAuth2Session(CLIENT_ID, scope=SCOPE, redirect_uri=REDIRECT_URI)
authorization_url, state = spotify.authorization_url(AUTH_URL)
res = requests.post(TOKEN_URL,
    auth=HTTPBasicAuth(CLIENT_ID, CLIENT_SECRET),
    data={
        'grant_type': 'authorization_code',
        'code':'',
        'redirect_uri': REDIRECT_URI
    })
print(res.json())
token = json.dumps(res.json())

#token = 'BQDVCGZn8NB0y-ec9Wswnrbdbrp90hJVN4qAb5TFUO-vyjT0wR_Eu-6yEPVV0vpmTPRomcB2LAsEdKPmRg5Wel2W3pMh0_0tn5CP6F6AzImW9uxZssRTAc-4uVwQc-g6Mlc7Krm447Tt09GKjQUFi_u7_Mqob6jyBJzZNcd09NucKroY501Ak4GB-ZXgoPF1'
endpoint = "https://api.spotify.com/v1/me/player/currently-playing"
spotifyHeaders = {'Authorization':'Bearer ' + token}
requestAmount = 1

def GrabSpotifyCurSong(curSongJson):
    return curSongJson['item']['name']
def GrabSpotifyCurArtist(curSongJson):
    return curSongJson['item']['artists'][0]['name']
def GrabCurrentSongImage(curSongJson):
    return curSongJson['item']['album']['images'][0]['url']
def GrabCurrentSongTimestamp(curSongJson):
    return curSongJson['progress_ms']
def GrabTotalSongTimestamp(curSongJson):
    return curSongJson['item']['duration_ms']

while True:
    curSong = requests.get(endpoint, headers=spotifyHeaders)
    curSongJson = curSong.json()
    print(curSong.status_code)
    print(curSong.text)

    curSong = requests.get(endpoint, headers=spotifyHeaders)

    currentSong = GrabSpotifyCurSong(curSongJson)
    currentArtist = GrabSpotifyCurArtist(curSongJson)
    img = GrabCurrentSongImage(curSongJson)
    current_time = GrabCurrentSongTimestamp(curSongJson)
    total_time = GrabTotalSongTimestamp(curSongJson)

    print(currentSong)
    print(currentArtist)
    print(img)
    print(current_time)
    print(total_time)
    
    img_data = requests.get(img).content
    with open('C:\\Temp\\temp.jpg', 'wb') as handler:
        handler.write(img_data)
    
    image = Image.open("C:\\Temp\\temp.jpg")
    image2 = image.resize((2560, 1440))
    blurred_image = image2.filter(ImageFilter.GaussianBlur(radius=40))
    enhancer = ImageEnhance.Brightness(blurred_image)
    blurred_image = enhancer.enhance(.3)
    blurred_image.paste(image, (960, 400))
    myFont = ImageFont.truetype('C:\\Users', 40)
    d1 = ImageDraw.Draw(blurred_image)
    try:
        d1.text(((2560 / 2) - (d1.textlength(currentSong.lower(),font=myFont) / 2), 10), currentSong.lower(), font=myFont, fill =(255, 255, 255))  
        d1.text(((2560 / 2) - (d1.textlength(currentArtist.lower(),font=myFont) / 2), 55), currentArtist.lower(), font=myFont, fill =(255, 255, 255))  
    except:
        d1.text(((2560 / 2) - (d1.textlength(currentSong.lower(),font=myFont) / 2), 10), currentSong.lower(), font=myFont, stroke_fill=(255,255,255), fill=255)  
        d1.text(((2560 / 2) - (d1.textlength(currentArtist.lower(),font=myFont) / 2), 55), currentArtist.lower(), font=myFont, stroke_fill=(255,255,255), fill=255)  
    
    blurred_image.save("C:\\Temp\\temp2.jpg",quality=100)
    
    SPI_SETDESKWALLPAPER = 20 
    ctypes.windll.user32.SystemParametersInfoW(SPI_SETDESKWALLPAPER, 0, "C:\\Temp\\temp2.jpg" , 3)
    time.sleep(2)