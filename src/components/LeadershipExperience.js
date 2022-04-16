import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LeadershipExperience() {
    return (
        <div className='container topic'>
            <FontAwesomeIcon icon="fa-solid fa-person-walking-arrow-right" /> <h4 className='heading' style={{ display: 'inline' }}>Leadership Experience</h4>
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

export default LeadershipExperience