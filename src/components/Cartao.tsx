import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { CardMedia } from '@mui/material';

export default function Cartao( { artist } ) {
  
  return (
    <Card
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        border: '1px solid',
        borderColor: '#fff',
        background: 'var(--secondary)',
        height: '60vh'
      }}
    >
      <CardMedia
        component="img"
        style={{ objectPosition: 'center top', height: 300, width: '100%', objectFit: 'cover' }}
        image={artist.images[1].url}
      />
      <CardContent>
        <Box
          sx={{
            mb: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <Typography variant="h6" style={{fontFamily:'Poppins'}}>
            {artist.name}
          </Typography>
          <Typography variant="subtitle2" style={{fontFamily:'Poppins'}}>
          {artist.followers.total} Followers on Spotify
          </Typography>
          
        </Box>
        <Divider
          sx={{
            my: 2,
            opacity: 0.2,
            borderColor: 'grey.500',
          }}
        />
      </CardContent>
    </Card>
  );
}