import React from 'react'
import './Main.css'


import { Container, Row, Col, Image,Button } from 'react-bootstrap';
import myImage from '../goo3.png';
import SocialMediaIcon from '../SocialMediaIcon';

export default function Section1() {
  return (

    <Container className="section1 my-5 py-5">
      <Row className="align-items-center">
      
        <Col md={6} >
        <Image src={myImage} fluid style={{ width: '100%', height: '100%' }} />

        </Col>
        <Col md={6}>
          <h2>I' m a Software Developer</h2>
          <p>"Innovative Project Manager with Software Engineering Expertise, Specializing in Frontend Development and Digital Transformation.".</p>
          <Button >Explore</Button>

          <SocialMediaIcon/>
          
        </Col>
      </Row>
    </Container>
  )
}
