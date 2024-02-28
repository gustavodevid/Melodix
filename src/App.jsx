import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Songs from './pages/Songs';
import Login from './pages/Login';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/songs" element={<Songs />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App