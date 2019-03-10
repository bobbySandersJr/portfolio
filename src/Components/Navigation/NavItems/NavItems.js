import React from 'react';

import NavItem from './NavItem/NavItem';

import './NavItems.css';

const NavItems = (props) => {
  return (
    <ul className='NavItems'>
      <NavItem link='/'>Home</NavItem>
      <NavItem link='/resume'>Resume</NavItem>
    </ul>
  );
};

export default NavItems;