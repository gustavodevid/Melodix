import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function artistCard( { artist, icon }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='card' sx={{ maxWidth: 345, backgroundColor:'var(--fifth)' }}>
      <CardMedia
        component="img"
        style={{ objectPosition: 'center top', 
        height: 300, 
        width: '100%', 
        objectFit: 'cover',
        }}
        image={artist.images[1].url}
      />
      <CardContent style={{ height: '100%' }}>
        <Typography variant="h4" color="var(--secondary)" style={{fontFamily:'Poppins'}}>
         {artist.name}
        </Typography>
        <Typography variant="body2" color="#fff" style={{fontFamily:'Poppins'}}>
         {artist.followers.total} Followers on Spotify
        </Typography>
        <Typography variant="body2" color="#fff" style={{fontFamily:'Poppins'}}>
         Genres: {artist.genres.join(', ')}
        </Typography>
        <Typography variant="body2" color="#fff" style={{fontFamily:'Poppins'}}>
         Popularity level: {artist.popularity}
        </Typography>
        <Link to={`/artist-page/${artist.id}`}>
        <Button 
        sx={{margin:1, 
          color:'#fff', 
          backgroundColor:'var(--terciary)', 
          fontFamily:'Poppins',
          ":hover": {
            backgroundColor:'#fff'
          }
        }} 
        endIcon={<ArrowForwardIcon />} 
        variant='contained' 
        href='' 
        target='blank'>
          Read more 
        </Button>
        </Link>
      </CardContent>
    </Card>
  );
}