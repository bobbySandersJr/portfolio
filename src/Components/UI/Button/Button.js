import React from 'react';

import './Button.css';

const Button = (props) => {
  const btnClasses = ['Button'];
  
  if(props.classes){
    props.classes.split(';')
    .map(btnClass => {
      btnClasses.push(btnClass);
      return null;
    })
  }

  return (
    <div onClick={props.doClick} className={btnClasses.join(' ')}>
      {props.children}
    </div>
  );
};

export default Button;