import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
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
          pt: { xs: 14, sm: 20 },
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
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Procure um artista"
              style={{fontFamily:'Poppins', 
              backgroundColor:'var(--secondary)',
              borderRadius: '10px',
              color: '#fff',
            }}
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Search for a artist',
                style: {
                  color: 'var(--primary)',
                },
              }}
            />
            <Button variant="contained" style={{fontFamily:'Poppins', backgroundColor:'var(--terciary)', color:'var(--secondary)'}}>
              Procurar
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}