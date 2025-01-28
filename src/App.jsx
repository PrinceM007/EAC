import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Pricing from './pages/Pricing';
import Login from './pages/Login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ minHeight: '100vh' }}> {/* Ensures full-page height for content */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
        </Routes>
      </Box>
      <Footer /> {/* Keeps footer displayed globally */}
    </Router>
  );
};

export default App;
