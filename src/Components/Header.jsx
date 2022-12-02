import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Cart';


const Header = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container className='navContainer'>
            <Navbar.Brand href="/">e Commerce</Navbar.Brand>
            <Nav className='links'>
          
              <Nav.Link className='link' as={Link} to="/"><i class="fa-solid fa-house"></i></Nav.Link><br />
              <Nav.Link className='link' as={Link} to="/newUser">New User</Nav.Link><br />
              <Nav.Link className='link' as={Link} to="/login"><i class="fa-solid fa-user"></i></Nav.Link><br />
              <Nav.Link className='link' onClick={handleShow}><i class="fa-solid fa-cart-shopping"></i></Nav.Link><br />
            </Nav>
          </Container>
        </Navbar>
        <Cart show={show} handleClose={handleClose}/>
      </>
    );
};

export default Header;
           