import React from 'react'
import { Row, Col } from 'react-bootstrap';
import LinkInNewTab from './modules/LinkInNewTab';

function Projects() {
  return (
    <div className='container topic'>
        <h4 className='heading'>Projects</h4>
        <hr className='verticalLine'/>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>Online Resume (<a href='.' >lamichhane.us</a>)</strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            March 2022
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Created this online version of my resume using React, react-bootstrap and custom CSS; Deployed using <LinkInNewTab href='https://www.netlify.com/'>Netlify</LinkInNewTab>. (<LinkInNewTab href='https://github.com/AyeCL/resume'>view source code</LinkInNewTab>)</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>CS314 Software Engineering Project</strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            Spring 2022
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Conducted scrum meetings, react, java, junit, maven, git, and github.</li>
              <li>Built a web app using React as frontend and Java in the backend along with a MySQL database. The app was essentially a trip calculator that featured an OpenStreet Maps module. The user could create trips by searching for places or tapping on the map and the app would calculate distances between points, total distance and so on.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>WingCliff.com</strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            January 2014 - November 2017
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Built an online blog using WordPress; Posted how to’s, opinions, and updates on latest technologies.</li>
              <li>Around 500 monthly active users at one point.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>WordPress Theme</strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            January 2014 - November 2017
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Created a custom WordPress theme using HTML/CSS, Bootstrap and PHP for WingCliff.com.</li>
            </ul>
          </Col>
        </Row>
    </div>
  )
}

export default Projects