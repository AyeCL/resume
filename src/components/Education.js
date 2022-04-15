import React from 'react'
import { Row } from 'react-bootstrap';

function Education() {
  return (
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
  )
}

export default Education