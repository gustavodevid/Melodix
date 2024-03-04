import axios from 'axios';
const clientId = '879496c5b323472bbd08843975309a97';
const redirectUri = 'http://localhost:5173/home';

const fetchToken = async (clientId, clientSecret, setToken) => {
  try {
    const response = await axios.post("https://accounts.spotify.com/api/token", null, {
      params: {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    setToken(response.data.access_token);
  } catch (error) {
    console.log(error);
  }
};

const fetchGenreArtists = async ( token, genre, setArtistData, limit) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: `genre:${genre}`,
        type: 'artist',
        limit: limit, 
      },
    });

    setArtistData(response.data.artists.items);
  } catch (error) {
    console.log(error);
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

const getToken = async (code, codeVerifier) => {
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

async function fetchArtistInfo(artistId, accessToken, setArtistData) {
  const url = `https://api.spotify.com/v1/artists/${artistId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setArtistData(response.data)
  } catch (error) {
    console.error('Erro ao buscar informações do artista:', error);
    return null;
  }
}

async function fetchArtistAlbums(artistId, accessToken, setAlbums, limit) {
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: limit, 
      },
    });

    setAlbums(response.data)
  } catch (error) {
    console.error('Erro ao buscar álbuns do artista:', error);
    return null;
  }
}

async function fetchArtistTopTracks(artistId, accessToken, setTracks) {
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setTracks(response.data);
  } catch (error) {
    console.error('Erro ao buscar as principais faixas do artista:', error);
    return null;
  }
}

async function fetchRelatedArtists(artistId, token, setRelatedArtists) {
  try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      setRelatedArtists(response.data.artists);
  } catch (error) {
      throw new Error('Erro ao buscar artistas relacionados:', error);
  }
}

export { fetchToken, fetchGenreArtists, fetchTopSongs, getStoredToken, getToken, fetchArtistInfo, fetchArtistAlbums, fetchArtistTopTracks, fetchRelatedArtists };
