import React, { Component } from 'react';

import TopNavBar from '../../Navigation/TopNavBar/TopNavBar';
import BottomNavBar from '../../Navigation/BottomNavBar/BottomNavBar';
import Router from '../../Router/Router';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Aux from '../Aux/Aux';

import './Layout.css';

class Layout extends Component {
  state = {
    showDrawer: false,
  }

  doDrawerToggle = () => {
    this.setState(prevState => ({
      showDrawer: !prevState.showDrawer,
    }));
  }

  render() {
    return (
      <Aux>
        <div>
          <div className='MobileOnly'>
            <SideDrawer open={this.state.showDrawer} toggleDrawer={this.doDrawerToggle}/>
          </div>
          <TopNavBar toggleDrawer={this.doDrawerToggle}/>
            <div className='Content'>
              <Router />
            </div>
          <BottomNavBar />
        </div>
      </Aux>
    );
  }
}

export default Layout;