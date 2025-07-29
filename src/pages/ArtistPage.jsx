import { fetchToken, fetchArtistInfo, fetchArtistAlbums, fetchArtistTopTracks, fetchRelatedArtists } from '../js/script';
import { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Divider,  Paper,  Slide,  Slider,  Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import ArtistCard from '../components/ArtistCard';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

export default function ArtistPage () {
    const [token, setToken] = useState('');
    const [artist, setArtistData] = useState(null);
    const [error, setError] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [relatedArtists, setRelatedArtists] = useState([]);
    const clientId='879496c5b323472bbd08843975309a97';
    const clientSecret='b8108264c4fa4a2d9b90d62720d065b9';
    const [loadingAlbums, setLoadingAlbums] = useState(true);
    const [loadingTracks, setLoadingTracks] = useState(true);
    const [loadingArtists, setLoadingArtists] = useState(true);
    const { artistId } = useParams();  
    
    useEffect(() => {
        fetchToken(clientId, clientSecret, setToken, setError);
      }, []);

    useEffect(() => {
      if (token) {
        fetchArtistInfo(artistId, token, setArtistData);
      }
    }, [token, artistId, setArtistData]); 

    useEffect(() => {
        const fetchAlbums = async () => {
          if (token) {
            try {
              await fetchArtistAlbums(artistId, token, setAlbums, '3');
            } catch (error) {
              console.error('Erro ao buscar álbuns do artista:', error);
            } finally {
                setLoadingAlbums(false);
            }
          }
        };
      
        fetchAlbums(); 
    }, [token, artistId, setAlbums]);

    useEffect(() => {
        const fetchTracks = async () => {
          if (token) {
            try {
              await fetchArtistTopTracks(artistId, token, setTracks);
            } catch (error) {
              console.error('Erro ao buscar tracks do artista:', error);
            } finally {
                setLoadingTracks(false);
            }
          }
        };
      
        fetchTracks(); 
    }, [token, artistId, setTracks]);

    useEffect(() => {
        const fetchTracks = async () => {
          if (token) {
            try {
              await fetchRelatedArtists(artistId, token, setRelatedArtists);
            } catch (error) {
              console.error('Erro ao buscar tracks do artista:', error);
            } finally {
                setLoadingArtists(false);
            }
          }
        };
        fetchTracks(); 
    }, [token, artistId, setRelatedArtists]);
      

    if (!artist || loadingAlbums || loadingTracks || loadingArtists) {
        return <CircularProgress />;
    } else return (
        <div>
            <div>
                <Typography style={{fontFamily:'Poppins', marginBottom:'20px'}} component="h2" variant="h4" color="var(--secondary)">
                {artist.name} is your favorite artist?
                </Typography>
            </div>
            <div>

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
      <img src={artist.images[0].url} alt={artist.name} style={{ width: '200px', borderRadius: '50%' }} />
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

    <div style={{ marginTop: '30px' }}>
                <Typography variant="h5" style={{ fontFamily: 'Poppins', marginBottom: '10px', color:'var(--secondary)' }}>{artist.name} Albums</Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent:'center' }}>
                    {albums.items.map(album => (
                        <Card key={album.id} style={{ width: '400px', backgroundColor: 'var(--secondary)'}}>
                            <CardMedia
                                component="img"
                                image={album.images[0].url}
                                alt={album.name}
                            />
                            <CardContent>
                                <Typography variant="subtitle1">{album.name}</Typography>
                                <Typography variant="subtitle2">{album.release_date}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                    <Link to={`/albums/${artistId}`}>
                    <Button 
                      sx={{margin:1, 
                        color:'#fff', 
                        backgroundColor:'var(--terciary)', 
                        fontFamily:'Poppins',
                        ":hover": {
                          backgroundColor:'#fff'
                        }
                      }} 
                      variant='contained' 
                      href='' 
                      target='blank'>
                        See more 
                </Button>
                        </Link>
    </div>

    {/* <div style={{ marginTop: '30px' }}>
                <Typography variant="h5" style={{ fontFamily: 'Poppins', marginBottom: '10px', color:'var(--secondary)' }}>Artist Top Tracks</Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {tracks.tracks.map(track => (
                        <Card key={track.id} style={{ width: '300px', backgroundColor: 'var(--secondary)' }}>
                            <CardMedia
                                component="img"
                                image={track.album.images[0].url}
                                alt={track.album.name}
                            />
                            <CardContent>
                                <Typography variant="subtitle1">{track.name}</Typography>
                                <Typography variant="subtitle2">{track.album.release_date}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
    </div> */}

    <Box
          id="dados"
          sx={{
            py: 6,
          }}
        >
          <Container>
            <Typography variant="h3" sx={{ color: 'var(--secondary)', fontFamily: 'Poppins', textAlign: 'center' }}>Best {artist.name} songs</Typography>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)', fontFamily: 'Poppins' }}>
                    <th style={{ padding: '8px', border: '1px solid var(--secondary)' }}>Track</th>
                    <th style={{ padding: '8px', border: '1px solid var(--secondary)' }}>Release Date</th>
                  </tr>
                </thead>
                <tbody>
                  {tracks.tracks.map(track => (
                    <tr key={track.id} style={{ fontFamily: 'Poppins', color:'var(--secondary)' }}>
                      <td style={{ padding: '8px', border: '1px solid var(--secondary)' }}>{track.name}</td>
                      <td style={{ padding: '8px', border: '1px solid var(--secondary)' }}>{track.album.release_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Box>

    <div>
        <Typography variant="h5" style={{ fontFamily: 'Poppins', marginBottom: '10px', marginTop:'20px', padding: '10px', color:'var(--secondary)' }}>
         Discover more <AutoAwesomeOutlinedIcon />  
         </Typography>
    <Carousel className='carousel'
      sx={{
        width: '100%',
        margin: '0 auto',
        textAlign:'center'

       }}
       animation="slide"
      autoPlay={true}
      navButtonsAlwaysVisible={false}
      indicatorIconButtonProps={{
        style: {
          color: 'var(--secondary)'
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: 'var(--terciary)'
        }
      }}
    >
      {relatedArtists.map(relatedArtist => (
        <Card key={relatedArtist.id} style={{ width: '300px', borderRadius:'999px' }} >
                          <ArtistCard artist={relatedArtist} icon={<AutoAwesomeOutlinedIcon/>}/>
                        </Card>
                    ))}
    </Carousel>
      </div>

            </div>
      </div>
    )
}
