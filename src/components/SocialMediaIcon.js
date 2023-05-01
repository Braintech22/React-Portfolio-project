import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaIcon() {
  return (
    <p className='my-5 py-5 '>
          <a href="https://www.linkedin.com/in/princejimmy/"><FontAwesomeIcon icon={faLinkedin} size="3x"  /></a>
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
     </p>
  )
}
