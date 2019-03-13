import React, { Component } from 'react';

import Card from '../../Components/UI/Card/Card';
import Button from '../../Components/UI/Button/Button';

import './Resume.css';

class Resume extends Component {
  state = {
    projectLinks : [
      'https://github.com/bobbySandersJr/portfolio',
    ]
  }

  buttonClickedHandler= link => {
    window.location.href = link;
  }

  render() {
    return (
      <div className='Page'>
        <div className='Container'>
          <div style={{display:'flex'}}>
            <Card title='Overview'>
              <p>My name is Bobby Sanders, Jr. I have been in development since 2016. I started programming 
                as a hobby in 2014 and decided to make it my full time job. I have developed IoT applications 
                used to automate buildings to UI applications used to streamline call center operations. I 
                am currently a Salesforce Developer for Love’s Travel Stops with a focus on Lightning Applications.
              </p>
              <p>
                It is my personal goal to always be learning and growing as a developer, father, husband, and person. 
                I am frequently taking online classes on platforms such as Udemy, Pluralsight, or Lynda to advance 
                my skills as a developer. It is my hope that, as I am continuously learning the newest practices, I 
                can deliver modern standards in the code that I write for you.
              </p>
            </Card>
          </div>
          <div style={{display:'flex', flexWrap: 'wrap'}}>
            <Card title='Education'>
              <p>
                <strong>Oklahoma City Community College</strong> <br/>
                2016 -2018 <br/>
                Associates of Science in Diversified Studies 
              </p>
            </Card>
            <Card title='Work History'>
              <p>
                <strong>Love’s Travel Stops and Country Stores</strong><br/>
                2018-present<br/>
                Salesforce Developer<br/>
              </p>
              <p>
                <strong>Braum’s, Inc.</strong><br/>
                2016-2018<br/>
                Full Stack Developer
              </p>
            </Card>
            <Card title='Skills'>
              <div>
                <ul>
                  <li>Modern Javascript (ECMA)</li>
                  <li>Node.js</li>
                  <li>React.js</li>
                  <li>Express.js</li>
                  <li>Mongo Database</li>
                  <li>Postgres Database</li>
                  <li>CSS</li>
                </ul>
              </div>
            </Card>
          </div>
          <div style={{display:'flex', flexWrap: 'wrap'}}>
            <Card title='Personal Projects'>
              <div>
                <ul>
                  <li className='Projects'>
                    <span>This site (React.js)</span>
                    <span>
                      <Button doClick={() => {this.buttonClickedHandler(this.state.projectLinks[0])}}>See the code</Button>
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
            <Card title='Goals'>
            <div>
                <ul>
                  <li>Do the 100 days of code challenge</li>
                  <li>Participate in an open source project</li>
                  <li>Do Development for a non-profit (pro-bono)</li>
                  <li>Develop a long term relationship with a company to do
                      contracted JavaScript development</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;