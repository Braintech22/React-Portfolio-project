import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Row } from 'react-bootstrap';
import "./Cards.css";


const Cards = ({ cardData }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className='g-4' style={{paddingBottom: '100px'}}>
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card className='cards'>
            <Card.Img variant="top" src={card.imageSrc} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.content}
              </Card.Text>
              <Button variant="primary">{card.buttonText}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      
    </Row>
  );
};

Cards.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;

