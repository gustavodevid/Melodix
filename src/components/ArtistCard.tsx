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

export default function artistCard( { artist }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        style={{ objectPosition: 'center top', height: 300, width: '100%', objectFit: 'cover' }}
        image={artist.images[1].url}
      />
      <CardContent>
        <Typography variant="h5" color="#000" style={{fontFamily:'Poppins'}}>
         {artist.name}
        </Typography>
        <Typography variant="body2" color="#000" style={{fontFamily:'Poppins'}}>
         {artist.followers.total} Followers on Spotify
        </Typography>
        <Typography variant="body2" color="#000" style={{fontFamily:'Poppins'}}>
         Genres: {artist.genres.join(', ')}
        </Typography>
        <Typography variant="body2" color="#000" style={{fontFamily:'Poppins'}}>
         Popularity level: {artist.popularity}
        </Typography>
      </CardContent>    
    </Card>
  );
}