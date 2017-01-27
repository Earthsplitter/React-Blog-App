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
                <aside className="sideBar" style={{height: innerHeight, width: '300px', top: '0' }}>
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
            <section>
                <Link to="/resume">Resume</Link>
                <p>Made by © Wen Ming</p>
            </section>
        )
    }
}
export default SideBar