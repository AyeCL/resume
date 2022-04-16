import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Lightbulb, LightbulbOff } from 'react-bootstrap-icons';

function Education(props) {
  const toggleTheme = () => {
    props.setTheme(props.theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='container topic'>
      <Row>
        <Col className='col-8'>
          <h4 className='heading'>Education</h4>
        </Col>
        <Col className='col-4' style={{ textAlign: 'right' }} >
          <span onClick={ () => {toggleTheme()} }>
            { props.theme === 'light' ? <Lightbulb fontSize={'1.2em'} /> : <LightbulbOff fontSize={'1.2em'} /> }
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
              GPA: 3.0
          </div>
      </Row>
    </div>
  )
}

export default Education