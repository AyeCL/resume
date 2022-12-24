import React from 'react'
import { Row, Col } from 'react-bootstrap';
import LinkInNewTab from './modules/LinkInNewTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects() {
  return (
    <div className='container topic'>
        <FontAwesomeIcon icon="fa-solid fa-code" fontSize={'1.2em'} /> <h4 className='heading' style={{ display: 'inline' }}>Projects</h4>
        <hr className='verticalLine'/>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}><LinkInNewTab href="https://talktostevejobs.com/">Talk to Steve Jobs</LinkInNewTab></strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            <strong>December 2022</strong>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Web App based on NextJS and GPT-3. Deployed using Vercel, mimicking the likeness of Steve Jobs as a questionnaire-type search engine.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}><a href="https://lamichhane.us/">Online Resume</a></strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            <strong>March 2022</strong>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Developed and deployed an interactive online version of my resume using React, Bootstrap and CSS, utilizing Netlify for deployment.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>CS314 Software Engineering Project</strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            <strong>Spring 2022</strong>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Managed a trip calculator web app using React, Java, and MySQL, with an OpenStreet Maps module for location selection and distance calculation.</li>
              <li>Participated in Scrum meetings and gained technical proficiency in React, Java, JUnit, and Git.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>WingCliff.com</strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            <strong>January 2014 - November 2017</strong>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Designed and launched a custom WordPress-based blog featuring a range of content including how-to guides, opinions, and updates on latest technologies. Successfully grew the blog to 500 monthly active users at its peak.</li>
            </ul>
          </Col>
        </Row>

    </div>
  )
}

export default Projects