/**
 * Created by wenming on 02/02/2017.
 */
import React from 'react'
import NavLink from '../Common/NavLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideBar: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.showSideBar);
        this.setState((prevState) => {
            return {showSideBar: !prevState.showSideBar}
        });
    }


    render() {
        const backColor = "linear-gradient(to bottom," + this.props.style.sideBar[0] + "," + this.props.style.sideBar[1]+")";
        const navPath = ["Homepage", "Experience", "Articles", "Projects"];
        const navButtons = navPath.map((path) => (
            <NavLink key={path} style={{height: '100%'}} activeStyle={{
                fontStyle: 'italic', background: "linear-gradient(to bottom," +
                this.props.style.navButton[0] + "," + this.props.style.navButton[1]
            }} to={path === "Homepage" ? "/" : path} onlyActiveOnIndex={path === "Homepage"}>
                {path}
            </NavLink>
        ));

        return (
            <nav className="topNav" style={{background: backColor, left: this.state.showSideBar?"250px":"0"}}>
                <div onClick={this.handleClick} style={{width: "50%", textAlign: "center"}}>
                    <span className="fa fa-bars"/>
                </div>
                {navButtons}
                <div style={{display: this.state.showSideBar?"initial":"none"}}>
                    {this.props.children}
                </div>
            </nav>
        );
    }
}

export default TopNav