import React from 'react'
import './Main.css'



import { Container, Row, Col, Image,Button } from 'react-bootstrap';
import myImage from '../goo6.png';
import SocialMediaIcon from '../SocialMediaIcon';

export default function Section1() {
  return (
    <Container className="section1 my-5 py-5">
      <Row className="align-items-center">
        <Col md={6} >
        <Image src={myImage} fluid style={{ width: '80%', height: '80%' }} />

        </Col>
        <Col md={6}>
          <h2>Hi, I' m Prince Jimmy</h2>
          I' m a <h1>Software Engineer and Manager</h1>
          <p>"Innovative Project Manager with Software Engineering Expertise, Specializing in Frontend Development and Digital Transformation.".</p>
          <Button >Lets Go</Button>

          <SocialMediaIcon/>
          
        </Col>
      </Row>
    </Container>
  )
}
