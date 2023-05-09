import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fibp68c', 'template_soy7z35', form.current, 'Y6ebN4LW5FokG-aVP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form
    ref={form}
    onSubmit={sendEmail}
    style={{
      paddingBottom: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  
      
    }}
  >
    <div style={{ marginBottom: '10px', width: '50px'  }}>
      <label htmlFor="name">Name</label>
      <input type="text" name="from_name" id="name" required />
    </div>

    <div style={{ marginBottom: '10px', width: '50px' }}>
      <label htmlFor="email">Email</label>
      <input type="email" name="from_email" id="email" required />
    </div>

    <div style={{ marginBottom: '10px', width: '50px' }}>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required></textarea>
    </div>

    <input style={{ marginBottom: '10px', width: '50px',  }} type="submit" value="Send" /> 
  </form>
  );
};

export default ContactForm;