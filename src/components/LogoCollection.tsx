import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';


const darkLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1920px-Spotify_logo_with_text.svg.png'
];

const logoStyle = {
  width: '75px',
  height: '25px',
  margin: '0 32px',
  opacity: 0.5,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = darkLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center" 
        style={{color:'var(--secondary)'}}
      >
       Powered by
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.9 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={` ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}