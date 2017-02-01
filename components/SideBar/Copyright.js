/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'
import { Link } from 'react-router'

/**
 * The bottom of the SideBar, including Resume Link and copyright
 */
class Copyright extends React.Component {
    render() {
        return (
            <section className="about-info">
                <Link to="/resume.pdf" className="resume">Resume</Link>
                <p style={{fontSize: '13px', marginBottom: '5px'}}>Made by © Wen Ming</p>
            </section>
        )
    }
}

export default Copyright;