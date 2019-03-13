import React from 'react';

import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Button from '../../UI/Button/Button';

import './TopNavBar.css';

const toolbar = (props) => (
  <header className='TopNavBar'>
    <div className='Menu HideOnDesktop'>
      <Button classes='btnMenu' doClick={props.toggleDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </Button>
    </div>
    <div className='Brand'>
      <Logo />
    </div>
    <nav className='HideOnMobile'>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;