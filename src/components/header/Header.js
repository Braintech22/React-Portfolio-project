import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.css'
// import { color } from 'framer-motion';



export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>

      <Navbar className='navbar' fixed="top" variant="dark" expand="sm" expanded={expanded}>
        <Container>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/">Prince Jimmy</Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" link mx-auto" style={{padding: '30px'}} >
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/skills">Skills</Link>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/portfolio">Portfolio</Link>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/contact">Contact</Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
