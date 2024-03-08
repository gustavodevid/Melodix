import ArtistCard from '../components/ArtistCard';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { fetchGenreArtists, fetchToken, searchArtists } from '../js/script';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [token, setToken] = useState('');
  const [artistData, setArtistData] = useState([]);
  const clientId='879496c5b323472bbd08843975309a97';
  const clientSecret='b8108264c4fa4a2d9b90d62720d065b9';
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const artistLabel = searchParams.get('artist');
  const [artistSearch, setArtistSearchData] = useState(null);
  
  useEffect(() => {
    fetchToken(clientId, clientSecret, setToken);
  }, []);
  
  useEffect(() => {
    if (token) {
      fetchGenreArtists(token, "Pop", setArtistData, 3); 
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      searchArtists(artistLabel, token, setArtistSearchData)
    }
  }, [artistSearch, artistLabel, token, setArtistSearchData]);

  return (
    <>
      <div>
        <Navbar isLoginPage={false}/>
        {!artistSearch ? (
          <Typography variant="body1" color="#fff" style={{ fontFamily: 'Poppins' }}>
            Loading...
          </Typography>
          ) : (
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
      
          <ArtistCard artist={artistSearch}/>
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
)}

      </div>
    </>
  );
}

export default Home;
