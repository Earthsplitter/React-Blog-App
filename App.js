/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'

import SideBar from './components/SideBar/SideBar'

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
                "linear-gradient(to left, deepskyblue, lightseagreen)",                //Jade Green Style
                "linear-gradient(to left, red , yellow)",                              //Summer Fire Style
                "linear-gradient(to left, #ff6e7f, #bfe9ff)",                          //Noon to Dusk Style
                "linear-gradient(to left, #003973, #e5e5be)"                           //Horizon Style
            ],
            /**
             * Used to style the active navigation button, darker than background
             */
            buttonGradient: [
                "linear-gradient(to left, #00afef, #208b83)",                          //Jade Green Style
                "linear-gradient(to left, #cc0000, #e2e200)",                          //Summer Fire Style
                "linear-gradient(to left, #e46272, #a0c4d6)",                          //Noon to Dusk Style
                "linear-gradient(to left, #003469, #d9d9b4)"                           //Horizon Style
            ]
        };
        /**
         * record the current style
         * @type {{colorStyle: number}}
         */
        this.state = {
            colorStyle: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Handle click event on sideBar, change to next style
     * Pass down to SideBar
     */
    handleClick() {
        // let newState = this.state.colorStyle + 1;
        // if (newState >= this.gradient.length) {
        //     newState = 0;
        // }
        //pit fall. use self to bind this, see facebook guide
        let self = this;
        this.setState(function (prevState) {
            let newState = prevState.colorStyle+1;
            if (newState >= self.gradient.length) {
                newState = 0;
            }
            return {colorStyle: newState};
        })
    }

    render() {
        /**
         * The width of Sidebar, recommend > 300px
         * @type {string}
         */
        let sideBarWidth = '350px';
        /**
         * Wrap properties and pass down to SideBar
         * @type {{}}
         */
        let sideBarGradient = {};
        sideBarGradient.sideBar = this.gradient.sideBarGradient[this.state.colorStyle];
        sideBarGradient.navButton = this.gradient.buttonGradient[this.state.colorStyle];

        return (
            <div>
                <SideBar handleClick={this.handleClick} gradient={sideBarGradient} width={sideBarWidth}/>
                <main style={{marginLeft: sideBarWidth, height: innerHeight, overflow: 'auto'}}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default MainFrame