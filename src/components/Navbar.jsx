import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (    
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="#" style={{color: 'var(--secondary)'}}>Harmony</Link>
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
                            <Link disabled className="nav-link" style={{color: 'var(--secondary)'}}>Discover</Link>
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
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
