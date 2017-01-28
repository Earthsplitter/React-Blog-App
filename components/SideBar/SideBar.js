/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { Link } from 'react-router'

import SideNav from './SideNav'
import Information from './Information'

/**
 * A side bar shown on left, including introduction and navigation
 */
class SideBar extends React.Component {

    constructor(props) {
        super(props);
        /**
         * Used to implement fade in transition
         * @type {{opacity: number, canBeClick: boolean}}
         */
        this.state = {
            opacity: 1,                     //current opacity, change from 0 to 1 to fulfill fade in
            canBeClick: true,               //Can not be clicked when sideBar in transition
        };

        this.fadeIn = this.fadeIn.bind(this);
    }

    /**
     * Start fade in when upper component send new gradient style property
     * @param nextProps The next gradient style
     */
    componentWillReceiveProps(nextProps) {
        if (this.props.gradient.sideBar !== nextProps.gradient.sideBar) {
            this.setState({
                opacity: 0.1,
                canBeClick: false,
            });
            this.timeInterval = setInterval(this.fadeIn,16);
        }
    }

    /**
     *
     */
    fadeIn() {
        this.setState((prevState) => {
            if (prevState.opacity >= 1) {
                clearInterval(this.timeInterval);
                return {
                    opacity: 1,
                    canBeClick: true
                }
            } else {
                return {
                    opacity: prevState.opacity + 0.016,
                }
            }
        });
    }

    render() {
        return (
            <aside onClick={this.state.canBeClick?this.props.handleClick:''} className="sideBar" style={{
                opacity:this.state.opacity, height: innerHeight, width: this.props.width, top: '0',
                background: "linear-gradient(to left," + this.props.gradient.sideBar[0] + "," + this.props.gradient.sideBar[1]}}>
                <Information/>
                <SideNav buttonGradient={this.props.gradient.navButton}/>
                <About/>
            </aside>
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