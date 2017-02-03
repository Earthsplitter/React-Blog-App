/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import {Link} from 'react-router'
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

export default NavLink