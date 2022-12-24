import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LeadershipExperience() {
    return (
        <div className='container topic'>
            <FontAwesomeIcon icon="fa-solid fa-person-walking-arrow-right" /> <h4 className='heading' style={{ display: 'inline' }}>Leadership Experience</h4>
            <hr className='verticalLine'/>
            <Row>
                <div className='col-7' style={{ fontSize: '1.1em' }}>
                    <strong>Colorado State University Housing & Dining Services</strong><br/>
                    <em>Resident Assistant</em>
                </div>
                <div className='col-5' style={{ textAlign: 'right' }}>
                    <strong>August 2021 - Present</strong>
                </div>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li>Connected students to over 50 campus resources, including interest clubs, diversity centers, disability accommodations, and campus events. Developed advanced skills in conflict management and communication through bias and Title IX training, as well as effectively managing various student incidents.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <div className='col-7' style={{ fontSize: '1.1em' }}>
                    <strong>IT Club - CCRC</strong><br/>
                    <em>President</em>
                </div>
                <div className='col-5' style={{ textAlign: 'right' }}>
                    <strong>August 2016 - May 2018</strong>
                </div>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li>Hosted events such as cybersecurity programs, serving as a speaker for approximately 150 viewers.</li>
                        <li>Led weekly meetings and managed day-to-day activities for a club with 24 members.</li>
                        <li>Organized the first web design competition in school, recognizing the winners.</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default LeadershipExperience