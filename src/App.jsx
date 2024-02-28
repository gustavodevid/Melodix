import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Songs from './pages/Songs';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/songs" element={<Songs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App