import React from 'react'

function Technologies() {
  return (
    <div className='container topic'>
        <h4 className='heading'>Technologies/Skills Familiar With</h4>
        <hr className='verticalLine'/>
        <LinkInNewTab href='https://www.java.com/en/'>Java</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://www.cplusplus.com/'>C++</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://docs.microsoft.com/en-us/dotnet/csharp/'>C#</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://docs.microsoft.com/en-us/cpp/c-language/?view=msvc-170'>C</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://en.wikipedia.org/wiki/HTML'>HTML</LinkInNewTab>/<LinkInNewTab href='https://developer.mozilla.org/en-US/docs/Web/CSS'>CSS</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://reactjs.org/'>React</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://getbootstrap.com/'>Bootstrap</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://www.php.net/'>PHP</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://www.python.org/'>Python</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://www.swift.org/'>Swift</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://developer.apple.com/xcode/swiftui/'>SwiftUI</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://www.arduino.cc/'>Arduino</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://github.com/'>GitHub</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://www.docker.com/'>Docker</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://www.ssh.com/academy/ssh/command'>SSH</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://code.visualstudio.com/'>Visual Studio Code</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://slack.com/'>Slack</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://affinity.serif.com/en-us/designer/'>Affinity Designer</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://affinity.serif.com/en-us/photo/'>Affinity Photo</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://www.adobe.com/products/illustrator.html'>Adobe Illustrator</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://www.adobe.com/products/photoshop.html'>Adobe Photoshop</LinkInNewTab>,{' '}
        <LinkInNewTab href='https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide'>Linux Command Line</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://business.facebook.com/'> Meta (previously Facebook) Business Suite</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://www.json.org/json-en.html'>JSON</LinkInNewTab>,{' '} 
        <LinkInNewTab href='https://www.tutorialspoint.com/unix/shell_scripting.htm'>Shell Scripting</LinkInNewTab>
    </div>
  )
}

function LinkInNewTab(props) {
    return (
        <a href={props.href} target='_blank' rel='noopener noreferrer'>{props.children}</a>
    )
}

export default Technologies