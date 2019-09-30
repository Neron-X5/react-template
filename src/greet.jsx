import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Greet = ({ name = '' }) => {
  return <h2 className='greeting'>{`Hello! ${name}`}</h2>;
};

Greet.propTypes = {
  name: PropTypes.string
};

export default Greet;
