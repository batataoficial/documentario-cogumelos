import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Especies from './pages/Especies.jsx';
import Ecologia from './pages/Ecologia.jsx';
import Cultura from './pages/Cultura.jsx';
import Mapa from './pages/Mapa.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especies" element={<Especies />} />
        <Route path="/ecologia" element={<Ecologia />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </Router>
  );
}

export default App;