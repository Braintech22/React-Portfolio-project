import React from 'react';
import './Main.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import myImage from '../goo6.png';
import SocialMediaIcon from '../SocialMediaIcon';
import { motion } from 'framer-motion';

export default function Section1() {
  return (
    <Container className="section1 my-5 py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={myImage} fluid style={{ width: '80%', height: '80%' }} />
        </Col>
        <Col md={6}>
          <h2>Hi, I'm Prince Jimmy</h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I'm a <span>Software Engineer and Manager</span>
          </motion.h3>
          <p>
            "Innovative Project Manager with Software Engineering Expertise,
            Specializing in Frontend Development and Digital Transformation."
          </p>
          <Button>Lets Go</Button>
          <SocialMediaIcon />
        </Col>
      </Row>
    </Container>
  );
}
