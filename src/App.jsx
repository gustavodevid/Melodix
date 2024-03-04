import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import Artists from './pages/Artists';
import ArtistPage from './pages/ArtistPage';
import Albums from './pages/Albums';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Index />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/artist-page/:artistId" element={<ArtistPage />} />
        <Route exact path="/albums/:artistId" element={<Albums />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
