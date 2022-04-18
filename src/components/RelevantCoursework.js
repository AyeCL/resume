import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function RelevantCoursework() {
  return (
    <div className='container topic'>
        <FontAwesomeIcon icon="fa-solid fa-book" fontSize={'1.2em'} /> <h4 className='heading' style={{ display: 'inline' }}>Relevant Coursework</h4>
        <hr className='verticalLine'/>
        Software Engineering, Software Development with C++, Data Structures, Computer Organization, Calculus I, Calculus II, Linear Algebra, Discrete Structures
    </div>
  )
}

export default RelevantCoursework