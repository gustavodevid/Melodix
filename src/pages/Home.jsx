import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { fetchGenreArtists } from '../js/script';
import { Grid } from '@mui/material';
import ArtistCard from '../components/ArtistCard';

const Home = () => {
  const [artistData, setArtistData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('Pop');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('access_token')
        await fetchGenreArtists(token, selectedGenre, setArtistData, setError);
      } catch (error) {
        console.error('Erro ao obter token ou buscar artistas:', error);
      }
    };
    if(selectedGenre) {
      fetchData();
    }
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

    return (
      <>
        <div>
          <Navbar isLoginPage={false}/>
          <div>
        <div className="navbar">
            <form className="d-flex" onSubmit={handleSubmit}>
              <select className="form-select" style={{backgroundColor:'var(--secondary)'}} onChange={handleGenreChange} value={selectedGenre}>
                <option defaultValue="Pop">Pop</option>
                <option value="Rap">Rap</option>
              </select>
            </form>
          </div>
        <Grid container spacing={2}>  
            {artistData.map(artist => (
                <Grid key={artist.id} item xs={12} sm={6} md={4} lg={3}>
                <ArtistCard artist={artist} />
            </Grid>
          ))}
          </Grid>
      </div>
        </div>
      </>
    );
  }

export default Home;