import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import { getTokenFromResponse } from './spotify';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log('🧑‍', user);
      });
    }

    console.log('I HAVE A TOKEN 👉', token);
  }, []);

  return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
