import axios from 'axios';
const clientId = '879496c5b323472bbd08843975309a97';
const redirectUri = 'http://localhost:5173/';

const fetchGenreArtists = async ( token, genre, setArtistData, setError) => {
  console.log(token);
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: `genre:${genre}`,
        type: 'artist',
        limit: 10, 
      },
    });

    setArtistData(response.data.artists.items);
  } catch (error) {
    setError(error);
  }
};

const fetchTopSongs = async (token, setSongs, setError ) => {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks',
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          limit: 10
        }
      }
    );
    setSongs(response.data.items);
  } catch (error) {
    setError(error);
  }
};

const getStoredToken = () => {
  try {
    const token = localStorage.getItem('access_token');
    console.log(token);
    if (token) {
      return token;
    } else {
      console.log('Nenhum token encontrado no localStorage.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao recuperar o token do localStorage:', error);
    return null;
  }
};

const getToken = async code => {
  let codeVerifier = localStorage.getItem('code_verifier');
  if (!codeVerifier) {
    console.error('Código de verificador não encontrado no localStorage');
    return;
  }

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const url = "https://accounts.spotify.com/api/token";
  try {
    const response = await fetch(url, payload);
    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    console.log(data.access_token);
  } catch (error) {
    console.error('Erro ao obter token:', error);
  }
};

export {  fetchGenreArtists, fetchTopSongs, getStoredToken, getToken };
