export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '947397e45723413ca4a7c42ada820c7d';

const scopes = [
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-modify-playback-state',
  'user-top-read'
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialogue=true`;

// http://localhost:3000/#access_token=BQCLcp0MDCkVr9-Ll0Tu6j7VzAE8PYoXHE5u2pFQi7JmHi-3yf3JfqTjhmvZHVjfKZ0lTYuz6ycBEK-w0USkoZdbfSbxMeTBwtt8-QewDtIyyoHJ3PQkmRVXaVdybUjZvZQR0JyTzNHag4_yt4jwKxvTGZBf9RDI2CzSRTbSciwhjcvxD8gL&token_type=Bearer&expires_in=3600
