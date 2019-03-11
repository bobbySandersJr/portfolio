import React from 'react';

import './Jumbotron.css';

const Jumbotron = (props) => {
  return (
    <div className='Jumbotron'>
      {props.children}
    </div>
  );
};

export default Jumbotron;