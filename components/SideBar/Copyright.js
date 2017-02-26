/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'
import { Link,browserHistory } from 'react-router'

/**
 * The bottom of the SideBar, including Resume Link and copyright
 */
class Copyright extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
         e.stopPropagation();
    }

    render() {
        return (
            <section className="about-info">
                <a onClick={this.handleClick} href="/resume.pdf" className="resume">Resume</a>
                <p style={{fontSize: '13px', marginBottom: '5px'}}>Made by © Wen Ming</p>
            </section>
        )
    }
}

export default Copyright;