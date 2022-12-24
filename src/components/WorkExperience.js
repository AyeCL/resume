import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Row, Col } from 'react-bootstrap';

function WorkExperience() {
  return (
    <div className='container topic'>
        <FontAwesomeIcon icon="fa-solid fa-briefcase" fontSize={'1.2em'} /> <h4 className='heading' style={{ display: 'inline' }}>Work Experience</h4>     
        <hr className='verticalLine'/>
        <Row>
          <div className='col-7' style={{ fontSize: '1.1em' }}>
            <strong>echowin</strong><br/>
            <em>Software Engineering Intern</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            <strong>August 2021 - Present</strong><br/>
            Longmont, CO
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Worked on bootstrapping a startup to plan, execute and deliver Conversational AI to small businesses.</li>
              <li>Created marketing materials, including designing and writing engaging landing page content and producing a
compelling marketing video using Final Cut Pro.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7' style={{ fontSize: '1.1em' }}>
            <strong>Capital College and Research Center (CCRC)</strong><br/>
            <em>Technology Consultant</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            Seasonal, <strong>August 2016 - Present</strong><br/>
            Kathmandu, Nepal
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Developed a scalable communication pipeline utilizing SMS and email delivery to disseminate entrance exam results to over 10,000 students nationwide. Utilized technologies such as Visual Basic macros, short url redirectors, SMS APIs, and Sendinblue.</li>
              <li>Designed and implemented updates to the college's official website using WordPress and custom CSS. Utilized CPanel, SSH, and Cloudflare to ensure efficient operation and maintenance of the website.</li>
              <li>Led the upgrade of the networking infrastructure for two buildings, including the deployment of 12 access points and an enterprise-grade router.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div style={{ fontSize: '1.1em' }}>
              <em>Marketing Consultant</em>
          </div>
          <Col>
            <ul>
              <li>Created and distributed media content to a large audience of families and students nationwide while also managing professional and technical communication for media accounts.</li>
              <li>Diversified social media outreach by managing advertising on Facebook Business Suite, writing administrative updates for newsletters, and producing Admissions Video with Final Cut Pro.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7' style={{ fontSize: '1.1em' }}>
            <strong>Students' Educational Institute (SEI)</strong><br/>
            <em>Technology, Marketing Consultant</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            <strong>August 2014 - Present</strong><br/>
            Kathmandu, Nepal
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Designed and maintained the institute's website using HTML/CSS, PHP, and Bootstrap.</li>
              <li>Created and edited a variety of marketing materials, including brochures, social media posts, and video content, for
distribution through various outlets.</li>
            </ul>
          </Col>
        </Row>
    </div>
  )
}

export default WorkExperience