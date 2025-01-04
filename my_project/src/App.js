import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas'; // For mobile Offcanvas menu

// Import your custom components
import Home from './components/Home';
import CarsData from './Vechical/CarsData';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to toggle between desktop and mobile navbar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initialize on load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MobileNavbar = () => (
    <Navbar bg="primary" expand={false} sticky="top" className="mb-3" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Type Something to Start</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/carrents">Car Rentals</Nav.Link>
              <Nav.Link as={Link} to="/rating">Ratings</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );

  const DesktopNavbar = () => (
    <Navbar bg="primary" variant="dark" sticky="top" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Type Something to Start</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/carrents">Car Rentals</Nav.Link>
          <Nav.Link as={Link} to="/rating">Ratings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

  return (
    <Router>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrents" element={<CarsData />} />
        {/* <Route path="/rating" element={<Rating />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
