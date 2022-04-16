import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Emoji from './Emoji'
import { isMobile } from 'react-device-detect'
import LinkInNewTab from './LinkInNewTab'

function Footer() {
    if (isMobile) {
        return (
            <div className='container topic text-center' style={{ paddingTop: '3vh', paddingBottom: '2vh' }}>
                <hr className='verticalLine' />
                <Row style={{ paddingTop: '1.8vh' }}>
                    <Col>
                        Made with <Emoji symbol='❤️' label='love' /> in Colorado <Emoji symbol='🏔' label='mountain' />
                        <br />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '1.5vh' }}>
                    <Col>
                        {SocialButtonsMobile()}
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div className='container topic' style={{ paddingTop: '3vh', paddingBottom: '1.5vh' }}>
            <hr className='verticalLine' />
            <Row>
                <Col className='col-6'>
                    <span style={{ fontSize: '1.5em' }}></span>Made with <Emoji symbol='❤️' label='love' /> in Colorado <Emoji symbol='🏔' label='mountain' />
                </Col>
                <Col className='col-6' style={{ textAlign: 'right' }}>
                    {SocialButtonsBrowser()}
                </Col>
            </Row>
        </div>
    )
}

function SocialButtonsBrowser() {
    return (
        <div style={{ fontSize: '1.5em' }}>
            <LinkInNewTab href='#' className='githubIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </LinkInNewTab>
            {" "}&nbsp;
            <LinkInNewTab href='#' className='linkedInIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </LinkInNewTab>
            {" "}&nbsp;
            <LinkInNewTab href='#'  className='instagramIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </LinkInNewTab>
            {" "}&nbsp;
            <LinkInNewTab href='#' className='facebookIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </LinkInNewTab>
        </div>
    )

}

function SocialButtonsMobile() {
    return (
        <div style={{ fontSize: '1.5em' }}>
            <LinkInNewTab href='#' className='githubIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </LinkInNewTab>
            {" "}&nbsp;&nbsp;&nbsp;
            <LinkInNewTab href='#' className='linkedInIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </LinkInNewTab>
            {" "}&nbsp;&nbsp;&nbsp;
            <LinkInNewTab href='#' className='instagramIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-instagram"  />
            </LinkInNewTab>
            {" "}&nbsp;&nbsp;&nbsp;
            <LinkInNewTab href='#' className='facebookIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </LinkInNewTab>
        </div>
    )
}

export default Footer