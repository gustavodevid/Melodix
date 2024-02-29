import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
