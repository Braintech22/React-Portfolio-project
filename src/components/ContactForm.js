import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import myImage from './goo7.jpeg';
import { Image, Row, Col, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fibp68c', 'template_soy7z35', form.current, 'Y6ebN4LW5FokG-aVP')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        form.current.reset(); // Reset the form
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <form className="text-center" ref={form} onSubmit={sendEmail}>
        {isSubmitted && (
          <Alert variant="success" onClose={() => setIsSubmitted(false)} dismissible>
            Message submitted successfully!
          </Alert>
        )}
        <Row xs={1} sm={1} md={2} className="g-4">
          <Col>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text" name="from_name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" name="from_email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <input type="submit" className="btn btn-primary" value="Send" />
          </Col>
          <Col>
            <Image src={myImage} fluid style={{ width: '80%', height: '80%' }} />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default ContactForm;
