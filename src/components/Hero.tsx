import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  const clientId = '879496c5b323472bbd08843975309a97';
  const redirectUri = encodeURIComponent('http://localhost:5173/home'); 
  const scope = encodeURIComponent('user-read-email');

  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
    window.location.href = authUrl;
  };
  return (
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
          pt: { xs: 2, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontFamily:'Poppins'
            }}
          >
            &nbsp;
            <Typography
              component="span"
              variant="h3"
              sx={{
                color: 'var(--secondary)',
                  fontFamily:'Poppins'
              }}
            >
             Harmony é uma heroína digital que vive no mundo da música
            </Typography>
          </Typography>
          <Typography variant="body2" textAlign="center" color='var(--secondary)' style={{fontFamily:'Poppins'}}>
          Ela é uma personagem carismática e apaixonada pela música, sempre pronta para ajudar os usuários a descobrir novas músicas, artistas e estilos.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' }, fontFamily:'Poppins' }}
          >
            <Button onClick={handleLogin} variant="contained" style={{fontFamily:'Poppins', backgroundColor:'var(--terciary)', color:'var(--secondary)'}}>
              Login com Spotify
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}