/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'

import SideNav from './SideNav'
import Information from './Information'

class SideBar extends React.Component {

    render() {
        return (
            <div>
                <aside className="sideBar" style={{height: innerHeight, width: '350px', top: '0' }}>
                    <Information/>
                    <SideNav/>
                    <About/>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

class About extends React.Component {

    render() {
        return (
            <section className="about-info">
                <Link to="/resume.pdf" className="resume">Resume</Link>
                <p style={{fontSize: '13px', marginBottom: '5px'}}>Made by © Wen Ming</p>
            </section>
        )
    }
}
export default SideBar