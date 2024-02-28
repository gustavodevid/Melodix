import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Navbar from '../components/Navbar';

const SpotifyPlayer = () => {
  const [token, setToken] = useState('');
  const clientId = '879496c5b323472bbd08843975309a97';
  const clientSecret = 'b8108264c4fa4a2d9b90d62720d065b9';
  const location = useLocation();

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    const code = queryParams.code;
    if (code) {
      fetchToken(code);
    }
  }, [location.search]);

  const fetchToken = async (code) => {
    try {
      const response = await axios.post("https://accounts.spotify.com/api/token", null, {
        params: {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: 'http://localhost:5173/home'
        },
        auth: {
          username: clientId,
          password: clientSecret
        }
      });
      setToken(response.data.access_token);
    } catch (error) {
      setError(error);
    }
  };

    return (
      <>
        <div>
          <Navbar isLoginPage={false}/>
        </div>
      </>
    );
  }

export default SpotifyPlayer;