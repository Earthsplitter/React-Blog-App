/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'
import Profile from './Profile'
import {Link} from 'react-router'


class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.handleQuit = this.handleQuit.bind(this);
    }

    componentWillMount() {
        browserHistory.push(this.props.location.pathname + "#" + this.props.currentColor);
    }

    handleQuit() {
        localStorage.setItem("LoginToken","0");
        browserHistory.push("/");
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
                    <Link activeStyle={{backgroundColor: "#ccc"}} to="/settings" className="tablinks" onlyActiveOnIndex={true}>Profile</Link>
                    <Link activeStyle={{backgroundColor: "#ccc"}} to="/experienceSetting" className="tablinks">Experience</Link>
                    <Link activeStyle={{backgroundColor: "#ccc"}} to="/articlesSetting" className="tablinks">Article</Link>
                    <Link activeStyle={{backgroundColor: "#ccc"}} to="/projectsSetting" className="tablinks">Projects</Link>
                </ul>
                <article style={{border: "1px solid #ccc", width: mq.matches?"100%":"80%",
                    margin: mq.matches?"0":"0 10%"}}>
                    {this.props.children}
                </article>
            </div>
        )
    }
}

export default Settings;