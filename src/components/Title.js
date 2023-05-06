import React from 'react';
import PropTypes from 'prop-types';
import "./Title.css";

const Title = ({ text }) => {
  return (
    <div className='title'>
      <h1>{text}</h1>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;

