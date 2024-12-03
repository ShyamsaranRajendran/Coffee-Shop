import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SensorData from './components/SensorData';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParkingModal from './components/Parking';
import Infrastructure from './components/Infra';
import Delivery from './components/Delivery';
import Products from './components/Products';
import Login from './components/login';
import Sign from './components/SignUp';
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={ <Products />} />
          <Route path="/parking" element={<ParkingModal />} />
          <Route path="/infra" element={<Infrastructure />} />
           <Route path="/delivery" element={<Delivery />} />
           <Route path="/login" element={<Login />} />
           <Route path="/sign" element={<Sign />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
