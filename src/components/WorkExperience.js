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
            <strong>Colorado State University</strong><br/>
            <em>Resident Assistant</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            August 2021 - Present<br/>
            Fort Collins, CO
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Foster a diverse community through events and provide more than 40 residents with appropriate resources.</li>
              <li>Direct and edit introduction videos for the staff team using Final Cut Pro.</li>
              <li>Create a safe environment by reinforcing campus policies.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7' style={{ fontSize: '1.1em' }}>
            <strong>Capital College and Research Center (CCRC)</strong><br/>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            August 2016 - Present<br/>
            Kathmandu, Nepal
          </div>
        </Row>
        <Row>
          <div className='col-7'>
            <em>Admissions Result Communication Pipeline Engineer</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right', fontSize: '0.9em' }}>
            <em>August 2018 - Present</em><br/>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Envision and develop a communication pipeline to send SMS and Emails in bulk to more than 10,000 students when Admission Entrance Results were published. The SMS and Emails contained the student’s name and a custom result PDF created in bulk using Visual Basic macros on Microsoft Word. The PDFs were then uploaded onto CCRC’s server, and because the link would have to be shortened for SMS word count limit, a short domain was purchased and configured with Short.io to use as a redirector to where the pdfs were stored. The shortened links were exported and used to send out SMS and Emails using a local SMS API in Nepal and Sendinblue for email communications.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <em>Web Developer</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right', fontSize: '0.9em' }}>
            <em>August 2018 - Present</em><br/>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Build and manage the college’s official website using WordPress and custom CSS.</li>
              <li>Handle the overall web presence using technologies like CPanel, SSH, FTP, DNS, Cloudflare.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <em>Network Administrator</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right', fontSize: '0.9em' }}>
            <em>Summer 2018</em><br/>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Upgraded the entire networking infrastructure of two buildings with around 12 Access Points, and an enterprise router.</li>
              <li>Setup a local server system to store and manipulate data between two buildings.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <em>Marketing Officer and Chief Editor (English Content)</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right', fontSize: '0.9em' }}>
            <em>August 2016 - Present</em><br/>
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Use applications like Adobe Illustrator, Affinity Designer, Affinity Photo to design Social Media Advertisements and 4 editions of brochures.</li>
              <li>Write and edit content for 4 Brochures.</li>
              <li>Manage social media accounts and handle social media advertising using Facebook (now Meta) Business Suite.</li>
              <li>Write social media posts and advertisement material for newspapers.</li>
              <li>Envisioned and created an ad video using Final Cut Pro that was played during CCRC’s Admissions 2021.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>Students' Educational Institute</strong><br/>
            <em>Web Developer / Marketing Officer</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            August 2014 - Present<br/>
            Kathmandu, Nepal
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Build and manage the institute’s website using technologies like HTML/CSS, PHP, Bootstrap.</li>
              <li>Write and edit content for brochures, along with social media posts, marketing material for newspapers and so on.</li>
            </ul>
          </Col>
        </Row>
    </div>
  )
}

export default WorkExperience