import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Emoji from './Emoji'
import { isMobile } from 'react-device-detect'
import LinkInNewTab from './modules/LinkInNewTab'

function Footer() {
    const lines = [
        <>Made with <Emoji symbol='❤️' label='love' /> in Colorado <Emoji symbol='🏔' label='mountain' /></>,
        <>Wait...is this line changing everytime i tap on it? <Emoji symbol='🤨' label='eyebrow-raise' /></>,
        <>Have a good day <Emoji symbol='😉' label='wink' /></>,
        <>I'm a <Emoji symbol='💻' label='computer' /> nerd. quite clearly.</>,
        <>I play <Emoji symbol='🎸' label='guitar' />, <Emoji symbol='🎹' label='keyboard' />, flute and I also sing <Emoji symbol='🎤' label='sing' /></>,
        <>I love being outdoors <Emoji symbol='🌴' label='tree' /></>,
        <>I hike a lot <Emoji symbol='🥾' label='shoes' /></>,
        <>I am with Ukraine <Emoji symbol='🇺🇦' label='Ukraine' /></>,
        <>And if the resume still doesn't convince you to hire me, tap this line! <Emoji symbol='👀' label='eyes' /></>,
    ]
    
    const [lineIndex, setLineIndex] = useState(Math.floor(Math.random() * lines.length))
    const [line, setLine] = useState(lines[lineIndex])

    const generateRandomIndex = () => { 
        let index = Math.floor(Math.random() * lines.length)
        while (index === lineIndex) {
            index = Math.floor(Math.random() * lines.length)
        }
        return index
    }
    
    useEffect(() => {
        setLine(lines[lineIndex])
    }, [lineIndex])

    const [showFooterTip, setShowFooterTip] = useState(true)

    const tapMe = () => {
        return (
            <span style={{ fontSize: '0.8em', color: '#e1306c'  }} >(Tap me!) </span>
        )
    }

    if (isMobile) {
        return (
            <div className='container topic text-center' style={{ paddingTop: '3vh', paddingBottom: '2vh' }}>
                <hr className='verticalLine' />
                <Row style={{ paddingTop: '1.8vh' }}>
                    <Col onClick={
                        () => {
                            setLineIndex(generateRandomIndex())
                            setShowFooterTip(false)
                        }
                    }>
                    { showFooterTip ? tapMe() : null }{line}
                        <br />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '1.5vh' }}>
                    <Col>
                        {SocialButtons()}
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div className='container topic' style={{ paddingTop: '3vh', paddingBottom: '1.5vh' }}>
            <hr className='verticalLine' />
            <Row>
                <Col className='col-8' onClick={
                    () => {
                        setLineIndex(generateRandomIndex())
                        setShowFooterTip(false)
                    }
                }>
                    <span style={{ fontSize: '1.5em' }}></span>{ showFooterTip ? tapMe() : null }{line}
                </Col>
                <Col className='col-4' style={{ textAlign: 'right' }}>
                    {SocialButtons()}
                </Col>
            </Row>
        </div>
    )
}

function SocialButtons() {
    return (
        <div style={{ fontSize: '1.5em' }}>
            <LinkInNewTab href='https://github.com/AyeCL' className='githubIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </LinkInNewTab>
            {" "}&nbsp;{ isMobile ? <>&nbsp;&nbsp;</> : null }
            <LinkInNewTab href='#' className='linkedInIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </LinkInNewTab>
            {" "}&nbsp;{ isMobile ? <>&nbsp;&nbsp;</> : null }
            <LinkInNewTab href='https://www.instagram.com/aye.yell/'  className='instagramIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </LinkInNewTab>
            {" "}&nbsp;{ isMobile ? <>&nbsp;&nbsp;</> : null }
            <LinkInNewTab href='https://www.facebook.com/AyeYell' className='facebookIconLink'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </LinkInNewTab>
        </div>
    )

}

export default Footer