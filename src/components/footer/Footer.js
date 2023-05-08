import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
  return (
    <footer className=" downpart mt-auto py-3 " style={{position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1}}>
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} prince jimmy</p>
      </Container>
    </footer>
  );
};

export default Footer;
