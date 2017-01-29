/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'

class SideNav extends React.Component {

    render() {
        /**
         * The paths of navigation buttons should be the same as its name
         * @type {[*]}
         */
        const navPath = ["Homepage","Experience", "Articles", "Projects"];
        /**
         * Style Links and group them in an array
         *
         */
        const navButtons = navPath.map((path) => (
            <li className="nav-button-list" key={path}>
                <NavLink activeStyle={{fontStyle: 'italic', background: "linear-gradient(to left," +
                this.props.buttonGradient[0] + "," + this.props.buttonGradient[1]}} to={path} onlyActiveOnIndex={path === "Homepage"}>
                    {path}
                </NavLink>
            </li>
        ));
        return (
            <nav style={{width: '100%'}}>
                 <ul style={{ width: '100%', textAlign: 'center', listStyle: 'none', paddingLeft: '0'}}>
                     {navButtons}
                </ul>
            </nav>
        )
    }
}

/**
 * Wrap Link, style it and stop its propagation
 */
class NavLink extends React.Component {
    /**
     * Stop propagation so that style won't change when click a nav button
     * @param e
     */
    stopPropagation(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <Link {...this.props}  onClick={this.stopPropagation} className="nav-button"/>
        )
    }
}

export default SideNav