import React from 'react';

function Contact(props) {
    return (
        <div>
            <h4>Casey Harding</h4>
            <a href={props.contact.linkedin} target="_blank" rel="noopener noreferrer" >linkedIn</a>
            <a href={props.contact.github} target="_blank" rel="noopener noreferrer" >Github</a>
            <a href={props.contact.email}>Email me!</a>
        </div>
    )
}

export default Contact;