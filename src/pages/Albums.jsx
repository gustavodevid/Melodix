import { fetchToken, fetchArtistInfo, fetchArtistAlbums, fetchArtistTopTracks, fetchRelatedArtists } from '../js/script';
import { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Divider,  Paper,  Slide,  Slider,  Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import ArtistCard from '../components/ArtistCard';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

export default function Albums () {
    const [token, setToken] = useState('');
    const [artist, setArtistData] = useState(null);
    const [error, setError] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [relatedArtists, setRelatedArtists] = useState(null);
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
              await fetchArtistAlbums(artistId, token, setAlbums, '15');
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
    <div style={{ marginTop: '30px' }}>
                <Typography variant="h5" style={{ fontFamily: 'Poppins', marginBottom: '10px', color:'var(--secondary)' }}>{artist.name} Albums</Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent:'center' }}>
                    {albums.items.map(album => (
                        <Card key={album.id} style={{ width: '250px', backgroundColor: 'var(--secondary)'}}>
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
    </div>

   
    )
}
