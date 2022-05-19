import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { SunFill, MoonFill } from 'react-bootstrap-icons';
import TapMe from './modules/TapMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Education(props) {
  const toggleTheme = () => {
    props.setTheme(props.theme === 'light' ? 'dark' : 'light')
  }

  const [showTip, setShowTip] = React.useState(true)

  return (
    <div className='container topic'>
      <Row>
        <Col className='col-8'>
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" fontSize={'1.2em'} /> <h4 className='heading' style={{ display: 'inline' }}>Education</h4>
        </Col>
        <Col className='col-4' style={{ textAlign: 'right', paddingBottom: '0.3em' }} >
          <span 
            onClick={() => {
              toggleTheme()
              setShowTip(false)
            }}
            style={{ cursor: 'pointer' }}
          >
            { showTip ? TapMe() : null }{ props.theme === 'light' ? <SunFill style={{ fontSize: '1.2em' }} /> : <MoonFill fontSize={'1.1em'} /> }
          </span>
        </Col>
      </Row>
      <hr className='verticalLine'/>
      <Row>
          <div className='col-8' style={{ fontSize: '1.1em' }}>
              <strong>Colorado State University</strong><br/>
              B.S. Computer Science - Artificial Intelligence and Machine Learning Concentration
          </div>
          <div className='col-4' style={{ textAlign: 'right' }}>
              December 2023<br/>
              GPA: 3.4
          </div>
      </Row>
    </div>
  )
}

export default Education