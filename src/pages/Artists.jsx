// src/components/SpotifyPlayer.js
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ArtistCard from '../components/ArtistCard';
import { fetchGenreArtists, fetchToken } from '../js/script';

const Artists = () => {
  const [token, setToken] = useState('');
  const [artistData, setArtistData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('Rap');
  const clientId='879496c5b323472bbd08843975309a97';
  const clientSecret='b8108264c4fa4a2d9b90d62720d065b9';

  useEffect(() => {
    fetchToken(clientId, clientSecret, setToken, setError);
  }, []);

  useEffect(() => {
    if (token) {
      fetchGenreArtists(token, selectedGenre, setArtistData, setError); 
    }
  }, [token, selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } 
  else if (!token || !artistData.length === 0) {
    return <div>Loading...</div>;
  } 
  else {
    return (
      <div>
        <div className="navbar">
            <form className="d-flex" onSubmit={handleSubmit}>
              <select className="form-select" style={{backgroundColor:'var(--secondary)'}} onChange={handleGenreChange} value={selectedGenre}>
                <option value="rap">Rap</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="mpb">MPB</option>
              </select>
            </form>
          </div>
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

export default Artists;
