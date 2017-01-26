/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'
let Information = require('./../data/personalInfo.json');

class SideBar extends React.Component {

    render() {
        return (
            <div>
                <aside style={{ position: 'fixed', backgroundColor: 'orange', display: 'flex', justifyContent: 'center',
                    alignItems: 'flex-start', flexWrap: 'wrap', height: innerHeight, width: '300px', top: '0' }}>
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
                <p>{Information.firstName} {Information.lastName}</p>
                <p>{Information.title}</p>
                <p>{Information.motto}</p>
                {/*<ContactBar buttons={Information.contactMethod}/>*/}
            </section>
        )
    }
}

class SideNav extends React.Component {

    render() {
        return (
            <nav>
                <ul style={{ width: '300px', textAlign: 'center', listStyle: 'none', paddingLeft: '0'}}>
                    <li className="nav-button-list"><NavLink to="/" onlyActiveOnIndex={true}>Homepage</NavLink></li>
                    <li className="nav-button-list"><NavLink to="/experience">Experience</NavLink></li>
                    <li className="nav-button-list"><NavLink to="/articles">Articles</NavLink></li>
                    <li className="nav-button-list"><NavLink to="/projects">Projects</NavLink></li>
                </ul>
            </nav>
        )
    }
}

class NavLink extends React.Component {

    render() {
        return (
            <Link {...this.props} className="nav-button" activeClassName="active-nav-button"/>
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