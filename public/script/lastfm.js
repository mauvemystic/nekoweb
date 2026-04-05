// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)
                        
const USERNAME = "jasnfitz"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();
    let status

    let isPlaying = json.track['@attr']?.nowplaying || false;

    if(!isPlaying) {
        // Trigger if a song isn't playing
        return;
    } else {
        // Trigger if a song is playing
    }

    // Values:
    // COVER IMAGE: json.track.image[1]['#text']
    // TITLE: json.track.name
    // ARTIST: json.track.artist['#text']

    document.getElementById("listening").innerHTML = `
    
    <div id="trackInfo">
    <img src="./imgs/musicnote.gif" height="13" alt="x"><span id="trackName">${json.track.name}</span> by <span id="artistName">${json.track.artist['#text']}</span>
    </div>
    `
};

getTrack();
setInterval(() => { getTrack(); }, 50000);