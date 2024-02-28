import axios from 'axios';

const fetchToken = async (clientId, clientSecret, setToken, setError) => {
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
    setError(error);
  }
};

const fetchGenreArtists = async (token, genre, setArtistData, setError) => {
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

export { fetchToken, fetchGenreArtists, fetchTopSongs };
