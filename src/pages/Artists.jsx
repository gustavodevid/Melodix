// src/components/SpotifyPlayer.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ArtistCard from '../components/ArtistCard';

const SpotifyPlayer = () => {
  const [token, setToken] = useState('');
  const [artistData, setArtistData] = useState([]);
  const [error, setError] = useState(null);
  const clientId='879496c5b323472bbd08843975309a97';
  const clientSecret='b8108264c4fa4a2d9b90d62720d065b9';

  useEffect(() => {
    const fetchToken = async () => {
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

    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchGenreArtists = async ( genre ) => {
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

      fetchGenreArtists('pop');
    }
  }, [token]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!token || !artistData.length < 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Grid container spacing={2}>  
            {artistData.map(artist => (
                <Grid key={artist.id} item xs={12} sm={6} md={4} lg={3}>
                <ArtistCard artist={artist} />
            </Grid>
          ))}
          </Grid>
      </div>
    );
  }
};

export default SpotifyPlayer;
