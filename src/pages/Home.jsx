import Hero from '../components/Hero';
import Cartao from '../components/Cartao';
import ArtistCard from '../components/ArtistCard';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { fetchGenreArtists, fetchToken } from '../js/script';
import { Box, Container, Grid, Typography } from '@mui/material';

const Home = () => {
  const [token, setToken] = useState('');
  const [artistData, setArtistData] = useState([]);
  const [error, setError] = useState(null)
  const clientId='879496c5b323472bbd08843975309a97';
  const clientSecret='b8108264c4fa4a2d9b90d62720d065b9';
  
  useEffect(() => {
    fetchToken(clientId, clientSecret, setToken, setError);
  }, []);
  
  useEffect(() => {
    if (token) {
      fetchGenreArtists(token, "Pop", setArtistData, setError, 3); 
    }
  }, [token]);

  return (
    <>
      <div>
        <Navbar isLoginPage={false}/>
        <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography style={{fontFamily:'Poppins'}} component="h2" variant="h4" color="var(--secondary)">
        What are the most played artists at the moment?
        </Typography>
        <Typography variant="body1" color="#fff" style={{fontFamily:'Poppins'}}>
        
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {artistData.map((artist) => (
          <Grid key={artist.id} item xs={12} sm={6} md={4} lg={3}>
            <ArtistCard artist={artist} />
          </Grid>
        ))} 
      </Grid>
    </Container>
      </div>
    </>
  );
}

export default Home;
