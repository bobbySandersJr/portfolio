import React, { Component } from 'react';

import Jumbotron from '../../Components/UI/Jumbotron/Jumbotron';

import '../Page.css';

class Home extends Component {
  render() {
    return (
      <div className='Page'>
        <Jumbotron>
          <h1>Code you can depend on. A developer you can trust.</h1>
          <p>
            Using current best practices, developing test coverage, and deploying with continuous integration gets you the best code into your app quickly.
          </p>
          <hr />
          <div style={{textAlign: 'center'}}>
            Icon links here
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;