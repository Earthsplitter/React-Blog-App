/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'

class SideNav extends React.Component {

    render() {
        return (
            <nav style={{width: '100%'}}>
                <ul style={{ width: '100%', textAlign: 'center', listStyle: 'none', paddingLeft: '0'}}>
                    <li className="nav-button-list"><NavLink activeStyle={{fontStyle: 'italic', background:this.props.buttonGradient}} to="/" onlyActiveOnIndex={true}>Homepage</NavLink></li>
                    <li className="nav-button-list"><NavLink activeStyle={{fontStyle: 'italic', background:this.props.buttonGradient}} to="/experience">Experience</NavLink></li>
                    <li className="nav-button-list"><NavLink activeStyle={{fontStyle: 'italic', background:this.props.buttonGradient}} to="/articles">Articles</NavLink></li>
                    <li className="nav-button-list"><NavLink activeStyle={{fontStyle: 'italic', background:this.props.buttonGradient}} to="/projects">Projects</NavLink></li>
                </ul>
            </nav>
        )
    }
}

/**
 * Wrap Link, style it and stop its propagation
 */
class NavLink extends React.Component {
    stopPropagation(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <Link {...this.props} onClick={this.stopPropagation} className="nav-button"/>
        )
    }
}

export default SideNav