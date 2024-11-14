import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SensorData from './components/SensorData';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParkingModal from './components/Parking';
import Infrastructure from './components/Infra';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/parking" element={<ParkingModal />} />
          <Route path="/infra" element={<Infrastructure />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
