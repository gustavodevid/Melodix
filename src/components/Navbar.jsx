import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

const Navbar = ({ isLoginPage }) => {
    const [artistName, setArtistName] = useState('');

    const handleInputChange = (event) => {
      setArtistName(event.target.value);
    };

    const handleGetStarted = () => {
      history.push(`/home?artist=${encodeURIComponent(artistName)}`);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            
            <div className="container">
                <img src="harmonylogo.png" className='logo'/>
                <Link className="navbar-brand" to="#" style={{color: 'var(--secondary)'}}>Harmony</Link>
                {!isLoginPage && (
                        <>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu}
                    style={{color:'var(--secondary)', backgroundColor:'var(--terciary)'}}    
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} style={{right: 0}}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item" style={{opacity:'0.7'}}>
                                    <Link disabled className="nav-link" style={{color: 'var(--secondary)'}}>Discover tops</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/artists" onClick={toggleMenu} style={{color: 'var(--secondary)'}}>Artists</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/albums" onClick={toggleMenu} style={{color: 'var(--secondary)'}}>Albums</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/songs" onClick={toggleMenu} style={{color: 'var(--secondary)'}}>Songs</Link>
                                </li>
                                <li className="nav-item">
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    alignSelf="center"
                                    spacing={1}
                                    useFlexGap
                                    sx={{ pt: 0, width: { xs: '100%', sm: 'auto' }, fontFamily: 'Poppins' }}
                                >
                                <TextField
                                id="outlined-basic"
                                hiddenLabel
                                size="small"
                                sx={{backgroundColor:'var(--secondary)', borderRadius:'999px'}}
                                variant="outlined"
                                placeholder="Enter a artist name"
                                value={artistName}
                                onChange={handleInputChange}
                                inputProps={{
                                  autocomplete: 'off',
                                  ariaLabel: '',
                                }}
                                />
                                <Link to={`/home?artist=${encodeURIComponent(artistName)}`}>
                                <Button variant="contained" 
                                style={{ fontFamily: 'Poppins', backgroundColor: 'var(--terciary)', color: 'var(--secondary)' }}
                                onClick={handleGetStarted}
                                >
                                Search
                                </Button>
                                </Link>
                                </Stack>
                                </li>
                    </ul>
                </div>
                            </>
                        )}
            </div>
        </nav>
    );
}

export default Navbar;
