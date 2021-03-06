import React from 'react'

function LinkInNewTab(props) {
    return (
        <a href={props.href} target='_blank' rel='noopener noreferrer' className={props.className}>{props.children}</a>
    )
}

export default LinkInNewTab