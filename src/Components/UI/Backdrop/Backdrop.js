import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
  const classes = ['Backdrop'];

  if(!props.show){
    classes.push('Hide');
  }

  return (
    <div className={classes.join(' ')} onClick={props.clicked}>
      
    </div>
  );
};

export default Backdrop;