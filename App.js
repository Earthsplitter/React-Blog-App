/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'

import {browserHistory} from 'react-router'
import Navigation from './components/SideBar/Navigation'
import Login from './components/Settings/Login'

/**
 * The main Component
 */
class MainFrame extends React.Component {

    constructor(props) {
        super(props);
        /**
         * Store different color styles
         * @type {{length: number, sideBarGradient: [*], buttonGradient: [*]}}
         */
        this.gradient = {
            /**
             * The number of color styles
             */
            length: 4,
            /**
             * Used to style the sideBar background
             */
            sideBarGradient: [
                ["deepskyblue", "lightseagreen"],                                       //Jade Green Style
                ["red", "yellow"],                              //Summer Fire Style
                ["#ff6e7f", "#bfe9ff"],                          //Noon to Dusk Style
                ["#003973", "#e5e5be"]                           //Horizon Style
            ],
            /**
             * Used to style the active navigation button, darker than background
             */
            buttonGradient: [
                ["#00afef", "#208b83"],                          //Jade Green Style
                ["#cc0000", "#e2e200"],                          //Summer Fire Style
                ["#e46272", "#a0c4d6"],                          //Noon to Dusk Style
                ["#003469", "#d9d9b4"]                           //Horizon Style
            ]
        };
        /**
         * record the current style
         * @type {{colorStyle: number}}
         */
        this.state = {
            colorStyle: 0,
            isLogin: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.setLogin = this.setLogin.bind(this);
    }

    /**
     * Handle click event on sideBar, change to next style
     * Pass down to SideBar
     */
    handleClick() {
        let self = this;
        self.setState(function (prevState) {
            let newState = Number(prevState.colorStyle) + 1;
            if (newState >= self.gradient.length) {
                newState = 0;
            }
            return {colorStyle: newState};
        });
        browserHistory.push(self.props.location.pathname + "#" + (Number(self.state.colorStyle) + 1) % 4);
    }

    /**
     * Mark the color in url so that refresh won't reset colorStyle
     */
    componentWillMount() {
        const style = this.props.location.hash;
        if (!style) {
            browserHistory.push(this.props.location.pathname + "#0");
        } else {
            this.setState({
                colorStyle: style.slice(1)
            });
        }
    }

    setLogin() {
        this.setState({isLogin: true});
    }

    render() {
        /**
         * The width of Sidebar, recommend > 300px
         * @type {string}
         */
        let sideBarWidth = '350px';
        let topNavHeight = '50px';
        /**
         * Wrap properties and pass down to SideBar
         * @type {{}}
         */
        let sideBarGradient = {
            num: this.state.colorStyle,
            sideBar: this.gradient.sideBarGradient[this.state.colorStyle],
            navButton: this.gradient.buttonGradient[this.state.colorStyle]
        };
        /**
         * use Media query to control Style
         */
        let mq = window.matchMedia("(max-width: 800px)");
        let mainStyle = null;
        if (mq.matches) {
            // For mobile devices
            sideBarWidth = '250px';
            mainStyle = {marginTop: topNavHeight, height: innerHeight, overflow: 'auto'}
        } else {
            // For laptop and pc
            mainStyle = {marginLeft: sideBarWidth, height: innerHeight, overflow: 'auto'};
        }
        // pass colorStyle down to children
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {currentColor: sideBarGradient.num, colorStyle: sideBarGradient.sideBar});
        });
        return (
            <div>
                <Navigation handleClick={this.handleClick} width={sideBarWidth} gradient={sideBarGradient}/>
                <Login setLogin={this.setLogin} login={this.state.isLogin}/>
                <main style={mainStyle}>
                    {childrenWithProps}
                </main>
            </div>
        )
    }
}

export default MainFrame
