import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <div onClick={props.doClick} className='Button'>
      {props.children}
    </div>
  );
};

export default Button;