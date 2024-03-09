import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useState } from 'react';

const Index = () => {
  const [artistName, setArtistName] = useState('');

  const handleInputChange = (event) => {
    setArtistName(event.target.value);
  };

  const handleGetStarted = () => {
    history.push(`/home?artist=${encodeURIComponent(artistName)}`);
  };
  // const authUrl = new URL("https://accounts.spotify.com/authorize");

  // const handleLogin = () => {
  //   window.localStorage.setItem('code_verifier', codeVerifier);
  //   authUrl.search = new URLSearchParams(params).toString();
  //   window.location.href = authUrl.toString();
  // };


  return (
    <div>
      <Navbar isLoginPage={true} />
      <div className='content'>
        <div className='harmony'></div>
        <div className='hero'>
            <Box
        id="hero"
        sx={({
          width: '100%',
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 1, sm:  15 },
            pb: { xs: 22, sm: 12 }
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
                component="span"
                variant="h2"
                sx={{
                  color: 'var(--terciary)',
                  fontFamily: 'Poppins',
                  fontWeight:'bold'
                }}
              >Harmony
              </Typography>
              <Typography
                component="span"
                variant="h4"
                sx={{
                  color: 'var(--secondary)',
                  fontFamily: 'Poppins'
                }}
              >
              Uma heroína digital que vive no mundo da música
              </Typography>
            <Typography variant="body2" textAlign="center" color='var(--secondary)' style={{ fontFamily: 'Poppins' }}>
              Ela é uma personagem carismática e apaixonada pela música, sempre pronta para ajudar os usuários a descobrir novas músicas, artistas e estilos.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' }, fontFamily: 'Poppins' }}
            >
              <TextField
              hiddenLabel
              size="small"
              sx={{backgroundColor:'var(--secondary)', borderRadius:'999px'}}
              variant="outlined"
              placeholder="Enter a artist name"
              value={artistName}
              onChange={handleInputChange}
              inputProps={{
                autocomplete: 'off',
                ariaLabel: '',
              }}
            />
              <Link to={`/home?artist=${encodeURIComponent(artistName)}`}>
              <Button variant="contained" 
              style={{ fontFamily: 'Poppins', backgroundColor: 'var(--terciary)', color: 'var(--secondary)' }}
              onClick={handleGetStarted}
              >
                Get Started
              </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
        </Box>
      </div>
      </div>
    </div>
  );
};

export default Index;
