/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'

import SideNav from './SideNav'
let Information = require('./../../data/personalInfo.json');


class SideBar extends React.Component {

    render() {
        return (
            <div>
                <aside className="sideBar" style={{height: innerHeight, width: '300px', top: '0' }}>
                    <PersonalInformation/>
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

class PersonalInformation extends React.Component {

    render() {
        return (
            <section style={{ width: '300px', textAlign: 'center', marginTop: '30px'}}>
                <img src={"../assets/image/"+Information.favicon} alt="Wen Ming's favicon"
                style={{ width: '150px', height: '120px'}}/>
                <p className="name">{Information.firstName} {Information.lastName}</p>
                <p className="title">{Information.title}</p>
                <p className="motto">{Information.motto}</p>
                {/*<ContactBar buttons={Information.contactMethod}/>*/}
            </section>
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