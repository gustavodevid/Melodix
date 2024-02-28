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
                <Link className="navbar-brand" to="#">Harmony</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} style={{right: 0}}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/artists" onClick={toggleMenu}>Artists</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/livros" onClick={toggleMenu}>Albums</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={toggleMenu}>Songs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
