import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MobileView } from 'react-device-detect'
import { Row, Col } from 'react-bootstrap'

function Header() {
  return (
    <div className='container text-center topic' style={{ paddingTop: '1vh', paddingBottom: '2vh' }}>
      <MobileView>
        <div style={{ paddingTop: '1vh' }}></div>
      </MobileView>
      <Row>
        <Col>
          <h1>
            Aayush Lamichhane
          </h1>
        </Col>
      </Row>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-envelope" /> aayush@lamichhane.us &nbsp;|&nbsp; <FontAwesomeIcon icon="fa-solid fa-phone" /> (720) 935-1478
      </div>
    </div>
  )
}

export default Header