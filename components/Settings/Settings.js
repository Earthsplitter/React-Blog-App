/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'
import Profile from './Profile'

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: 0,
        };
    }

    componentWillMount() {
        browserHistory.push(this.props.location.pathname + "#" + this.props.currentColor);
    }

    render() {
        let mq = window.matchMedia("(max-width: 800px)");
        return (
            <div style={{display: "flex", flexWrap:"wrap"}}>
                <ul style={{listStyleType: "none", display:"flex", border: "1px solid #ccc", backgroundColor: "#f1f1f1",
                    padding:"0", width: mq.matches?"100%":"80%", margin: mq.matches?"40px 0 0 0":"40px 10% 0 10%"}}>
                    <li><a style={{backgroundColor: this.state.tabs===0?"#ccc":""}} className="tablinks">Profile</a></li>
                    <li><a style={{backgroundColor: this.state.tabs===1?"#ccc":""}} className="tablinks">Experience</a></li>
                    <li><a style={{backgroundColor: this.state.tabs===2?"#ccc":""}} className="tablinks">Articles</a></li>
                    <li><a style={{backgroundColor: this.state.tabs===3?"#ccc":""}} className="tablinks">Projects</a></li>
                </ul>
                <article style={{border: "1px solid #ccc", width: mq.matches?"100%":"80%",
                    margin: mq.matches?"0":"0 10%"}}>
                    <Profile/>
                </article>
            </div>
        )
    }
}

export default Settings;