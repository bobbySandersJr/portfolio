import React, { Component } from 'react';

import Jumbotron from '../../Components/UI/Jumbotron/Jumbotron';
import Logo from '../../Components/UI/Logo/Logo';

import './Home.css';
import '../Page.css';

class Home extends Component {
  render() {
    return (
      <div className='Page'>
        <div>
        <div className='MainLogo MobileOnly'>
            <Logo text/>
          </div>
          <Jumbotron>
            <div style={{display: 'flex'}}>
              <div className='DesktopOnly MainLogo'>
                <Logo text/>
              </div>
              <div style={{marginLeft: '30px'}}>
                <h1>Code you can depend on. A developer you can trust.</h1>
                <p>
                  Using current best practices, developing test coverage, and deploying with continuous integration gets you the best code into your app quickly.
                </p>
              </div>
            </div>
            <div style={{width: '100%'}}>
                <div className='IconLinks'>
                  Icon links here
                </div>
              </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;