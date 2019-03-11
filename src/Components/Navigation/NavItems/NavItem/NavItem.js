import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css'

const NavItem = (props) => {
  return (
    <li className='NavItem'>
      <NavLink to={props.link} activeClassName='active' exact>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;