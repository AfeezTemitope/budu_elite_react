import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PLMatches from './pages/PLMatches';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pl-matches" element={<PLMatches />} />
      </Routes>  
    </Router>

  );
}

export default App;
