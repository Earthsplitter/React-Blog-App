/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import SideBar from './SideBar'
import TopNav from './TopNav'

class Navigation extends React.Component {

    render() {
        let sideBarGradient = this.props.gradient;
        let mq = window.matchMedia("(max-width: 800px)");
        let sideBarStyle = null;
        let sideBar = null;

        if (mq.matches) {
            sideBarStyle = {
                height: innerHeight, width: this.props.width,
                background: "linear-gradient(to left," + sideBarGradient.sideBar[0] + "," + sideBarGradient.sideBar[1]
            };
            sideBar = (
                <TopNav style={sideBarGradient}>
                    <SideBar style={sideBarStyle} handleClick={this.props.handleClick} gradient={sideBarGradient}/>
                </TopNav>
            );
        } else {
            sideBarStyle = {
                height: innerHeight, width: this.props.width,
                background: "linear-gradient(to left," + sideBarGradient.sideBar[0] + "," + sideBarGradient.sideBar[1]
            };
            sideBar = (<SideBar style={sideBarStyle} handleClick={this.props.handleClick} gradient={sideBarGradient}/>);
        }

        return (
            <div>
                {sideBar}
            </div>
        );
    }
}

Navigation.propTypes = {
    handleClick: React.PropTypes.func.isRequired,
    width: React.PropTypes.string.isRequired,
    gradient: React.PropTypes.object.isRequired
};

export default Navigation