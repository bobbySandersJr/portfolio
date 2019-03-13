import React from 'react';

import './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  const classes = ['SideDrawer'];

  if(props.open){
    classes.push('Open');
  }
  else{
    classes.push('Close');
  }

  return (
    <div style={{display: 'flex'}}>
      <Backdrop show={props.open} clicked={props.toggleDrawer}/>
      <div className={classes.join(' ')}>
        <Logo text/>
        <nav>
          <NavItems />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;