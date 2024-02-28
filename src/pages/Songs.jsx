import { useState, useEffect } from 'react';
import { fetchTopSongs } from '../js/script';
import { Grid, Typography } from '@mui/material';
import SongCard from '../components/SongCard';

const TopSongs = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      fetchTopSongs(token, setSongs, setError);
    }
  }, [token]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!token || songs.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Typography variant="h3" color="var(--secondary)" style={{fontFamily:'Poppins'}}>
         Top 50 songs
        </Typography>
        <Grid container spacing={2}>  
            {songs.map(song => (
                <Grid key={song.id} item xs={12} sm={6} md={4} lg={3}>
                <SongCard song={song} />
            </Grid>
          ))}
          </Grid>
      </div>
    );
  }
};

export default TopSongs;
