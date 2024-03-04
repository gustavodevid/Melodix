import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
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
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
           Harmony&nbsp;
            <Typography
              component="span"
              variant="h1"
              style={{fontFamily:'Poppins'}}
              color='#fff'
            >
              GoW DB
            </Typography>
          </Typography>
          <Typography textAlign="center" color='#fff' style={{fontFamily:'Poppins'}} >
           A God of War DataBase
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
          <Link to="/docs" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="error" endIcon={<ArrowForwardIcon />} style={{fontFamily:'Poppins'}}>
              Get Started
            </Button>
          </Link>
          </Stack>
        </Stack>  
      </Container>
    </Box>
  );
}