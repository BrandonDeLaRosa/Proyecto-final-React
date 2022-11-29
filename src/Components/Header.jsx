import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">e Commerce</Navbar.Brand>
            <Nav className="me-auto">
            {/* <Nav.Link >Home</Nav.Link><br /> */}
            <Nav.Link as={Link} to="/">Home</Nav.Link><br />
            <Nav.Link as={Link} to="/login">Login</Nav.Link><br />
            <Nav.Link as={Link} to="/products/1">Products</Nav.Link><br />
            <Nav.Link to="/purchases">Purchases(SIDEBAR)</Nav.Link><br />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;
           