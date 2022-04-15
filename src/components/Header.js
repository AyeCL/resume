import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

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

export default Header