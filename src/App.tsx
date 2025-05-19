import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Apology from './pages/Apology';
import Hope from './pages/Hope';
import './App.css'

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apology" element={<Apology />} />
          <Route path="/hope" element={<Hope />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
