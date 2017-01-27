/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'

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

export default SideNav