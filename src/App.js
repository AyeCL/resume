import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function App() {

  return (
    <>
      <Header />
      <Education />
      <Technologies />
      <RelevantCoursework />
      <WorkExperience />
      <Projects />
      <LeadershipExperience />
    </>
  );
}

function Header() {
  return (
    <div className='container text-center topic' style={{ paddingTop: '1vh', paddingBottom: '2vh' }}>
      <h1>
        Aayush Lamichhane
      </h1>
      <div>
        <FontAwesomeIcon icon={faEnvelope} /> aayush@lamichhane.us &nbsp;|&nbsp; <FontAwesomeIcon icon={faPhone} /> (720) 935-1478
      </div>
    </div>
  )
}

function Education() {
  return (
    <>
      <div className='container topic'>
        <h4 className='heading'>Education</h4>
        <hr className='verticalLine'/>
        <Row>
          <div className='col-8' style={{ fontSize: '1.1em' }}>
            <strong>Colorado State University</strong><br/>
            B.S. Computer Science - Artificial Intelligence and Machine Learning Concentration
          </div>
          <div className='col-4' style={{ textAlign: 'right' }}>
            December 2023<br/>
            GPA: 3.0
          </div>
        </Row>
      </div>
    </>
  );
}

function Technologies() {
  return (
    <>
      <div className='container topic'>
          <h4 className='heading'>Technologies/Skills Familiar With</h4>
          <hr className='verticalLine'/>
          Java, C++, C#, C, HTML/CSS, React, Bootstrap, PHP, Python, Swift, SwiftUI, Arduino, GitHub, Docker, SSH, Visual Studio Code, Slack, Teams, Affinity Designer, Affinity Photo, Adobe Illustrator, Adobe Photoshop, Linux Command Line, Meta Business Suite, JSON, Shell Scripting
      </div>
    </>
  );
}

function RelevantCoursework() {
  return (
    <>
      <div className='container topic'>
        <h4 className='heading'>Relevant Coursework</h4>
        <hr className='verticalLine'/>
        Software Engineering, Software Development with C++, Data Structures, Computer Organization, Calculus I, Calculus II, Linear Algebra, Discrete Structures
      </div>
    </>
  );
}

function WorkExperience() {
  return (
    <>
      <div className='container topic'>
        <h4 className='heading'>Work Experience</h4>
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
              <li>Upgraded the entire networking infrastructure with more than 12 Access Points, and an enterprise router.</li>
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
    </>
  );
}

function Projects() {
  return (
    <div className='container topic'>
        <h4 className='heading'>Projects</h4>
        <hr className='verticalLine'/>
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

function LeadershipExperience() {
  return (
    <div className='container topic'>
      <h4 className='heading'>Leadership Experience</h4>
      <hr className='verticalLine'/>
      <Row>
          <div className='col-7'>
            <strong style={{ fontSize: '1.1em' }}>IT Club - CCRC</strong><br/>
            <em>President</em>
          </div>
          <div className='col-5' style={{ textAlign: 'right' }}>
            August 2016 - May 2018
          </div>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Hosted events like Cybersecurity programs and was a speaker for around 150 viewers.</li>
              <li>Conducted weekly meetings and carried out day-to-day activities for the club with 24 members.</li>
              <li>Organized the first web designing competitions in school and acknowledged the winners.</li>
            </ul>
          </Col>
        </Row>
    </div>
  )
}

export default App;
