/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'

import SideBar from './components/SideBar/SideBar'
import {browserHistory} from 'react-router'
import Modal from './components/Common/Modal'

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
            showModal: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleLoginModal = this.handleLoginModal.bind(this);
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
     * toggle portrait to login
     */
    handleLoginModal(e) {
        e.stopPropagation();
        this.setState((prevState) => {
            return {
                showModal: !prevState.showModal
            }
        })
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

    render() {
        /**
         * Control modal hide/show
         * @type {null}
         */
        let modal = null;
        if (this.state.showModal) {
            modal = (
                <Modal title="Login" onClick={this.handleLoginModal}>
                    <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        /**
                         * Todo: make Login System
                         */
                    </div>
                </Modal>
            );
        } else {
            modal = null;
        }
        /**
         * The width of Sidebar, recommend > 300px
         * @type {string}
         */
        let sideBarWidth = '350px';
        /**
         * Wrap properties and pass down to SideBar
         * @type {{}}
         */
        let sideBarGradient = {
            num: this.state.colorStyle,
            sideBar: this.gradient.sideBarGradient[this.state.colorStyle],
            navButton: this.gradient.buttonGradient[this.state.colorStyle]
        };
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {currentColor: sideBarGradient.num, colorStyle: sideBarGradient.sideBar});
        });
        return (
            <div>
                <SideBar loginClick={this.handleLoginModal} handleClick={this.handleClick} gradient={sideBarGradient} width={sideBarWidth}/>
                <main style={{marginLeft: sideBarWidth, height: innerHeight, overflow: 'auto'}}>
                    {modal}
                    {childrenWithProps}
                </main>
            </div>
        )
    }
}

export default MainFrame