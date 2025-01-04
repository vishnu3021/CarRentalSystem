import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './AllFiles/Home';
import Features from './AllFiles/Features';

function NavBar() {
  return (
    <BrowserRouter>
    <div>
         <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to ="/Features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
   </div>
   <div>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Features" element={<Features />} />

    </Routes>
   </div>
    </div>
    </BrowserRouter>
  );
}

export default NavBar;