import React from 'react';

import './Card.css';

const Card = (props) => {
  const title = props.title ? <h1>{props.title}</h1> : null;

  return (
    <div className={'Card'}>
      {title}
      {props.children}
    </div>
  );
};

export default Card;