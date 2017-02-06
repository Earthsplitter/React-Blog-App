/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'
import Profile from './Profile'
import ProjectsSetting from './ProjectsSetting'

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currenttabs: 0,
        };
        this.handleQuit = this.handleQuit.bind(this);
        this.changeTabs = this.changeTabs.bind(this);
    }

    componentWillMount() {
        browserHistory.push(this.props.location.pathname + "#" + this.props.currentColor);
    }

    handleQuit() {
        localStorage.setItem("LoginToken","0");
        browserHistory.push("/");
    }

    changeTabs(e) {
        let number = ["Profile","Experience","Articles","Projects"];
        this.setState({
            currenttabs: number.indexOf(e.target.innerHTML)
    });
    }

    render() {
        let mq = window.matchMedia("(max-width: 800px)");
        return (
            <div style={{display: "flex", flexWrap:"wrap"}}>
                <h1 style={{marginTop:"15px", marginLeft:"auto", marginRight:"auto", fontSize:"24px"}}>Management System</h1>
                <div style={{width: "100%"}}>
                    <p className="cursorHoverPointer" onClick={this.handleQuit} style={{margin:"0 auto 0 80%", fontSize:"25px"}}><span className="fa fa-arrow-left"/>quit</p>
                </div>
                <ul style={{listStyleType: "none", display:"flex", border: "1px solid #ccc", backgroundColor: "#f1f1f1",
                    padding:"0", width: mq.matches?"100%":"80%", margin: mq.matches?"20px 0 0 0":"20px 10% 0 10%"}}>
                    <li><a onClick={this.changeTabs} style={{backgroundColor: this.state.currenttabs===0?"#ccc":""}} className="tablinks">Profile</a></li>
                    <li><a onClick={this.changeTabs} style={{backgroundColor: this.state.currenttabs===1?"#ccc":""}} className="tablinks">Experience</a></li>
                    <li><a onClick={this.changeTabs} style={{backgroundColor: this.state.currenttabs===2?"#ccc":""}} className="tablinks">Articles</a></li>
                    <li><a onClick={this.changeTabs} style={{backgroundColor: this.state.currenttabs===3?"#ccc":""}} className="tablinks">Projects</a></li>
                </ul>
                <article style={{border: "1px solid #ccc", width: mq.matches?"100%":"80%",
                    margin: mq.matches?"0":"0 10%"}}>
                    {this.state.currenttabs === 0?<Profile/>:""}
                    {this.state.currenttabs === 1?<ProjectsSetting/>:""}
                </article>
            </div>
        )
    }
}

export default Settings;