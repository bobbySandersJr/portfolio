import React from 'react';

import logoImg from '../../../assets/Green Sands.png';
import logoTextImg from '../../../assets/Green Sands Color.png';

import './Logo.css';

const Logo = (props) => {
  const usedLogo = props.text ? logoTextImg : logoImg;

  return (
    <img src={usedLogo} alt='Green Sands Apps' className='Logo'/>
  );
};

export default Logo;