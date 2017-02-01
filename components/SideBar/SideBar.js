/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'

import SideNav from './SideNav'
import Information from './Information'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/**
 * A side bar shown on left, including introduction and navigation
 */
class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            canBeClick: true,               //Can not be clicked when sideBar in transition
        };

    }

    /**
     * prevent click when style is changing
     */
    componentWillReceiveProps() {
            this.setState({
                canBeClick: false,
            });
            setTimeout(() => (
                this.setState({
                    canBeClick:true
                })
            ),800)
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeave={false}>
                {/* Key is important here! Any component wants to be animated must have a key */}
                <aside key={this.props.gradient.sideBar[0]}
                       onClick={this.state.canBeClick ? this.props.handleClick : ''} className="sideBar"
                       style={{
                           height: innerHeight, width: this.props.width, top: '0',
                           background: "linear-gradient(to left," + this.props.gradient.sideBar[0] + "," + this.props.gradient.sideBar[1]
                       }}>
                    <Information/>
                    <SideNav buttonGradient={this.props.gradient.navButton}/>
                    <About/>
                </aside>
            </ReactCSSTransitionGroup>
        )
    }
}

/**
 * The bottom of the SideBar, including Resume Link and copyright
 */
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