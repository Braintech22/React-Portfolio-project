import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-black" style={{position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1}}>
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} My Website Name</p>
      </Container>
    </footer>
  );
};

export default Footer;
