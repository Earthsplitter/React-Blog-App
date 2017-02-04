/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        browserHistory.push(this.props.location.pathname + "#" + this.props.currentColor);
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let info = JSON.parse(this.responseText);
                self.setState({
                    firstName: info.firstName
                })
            }
        };
        xhr.open("GET", "/data/personalInfo", true);
        xhr.send();
    }

    handleInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let state = this.responseText;
                if (state === "fail") {
                    //    Todo: send error message
                } else {
                    location.reload();
                }
            }
        };
        xhr.open("POST", "/settings", true);
        xhr.setRequestHeader("Content-type","application/json");
        xhr.send(JSON.stringify({
            "token":    localStorage.getItem("token"),
            "firstName": self.state.firstName
        }));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName"><p>first name: </p></label>
                    <input size={20} style={{lineHeight: "1.5em"}} type="text" id="firstName" name="firstName"
                           value={this.state.firstName} onChange={this.handleInput}/><br/>
                    <button style={{margin: "20px 0"}} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Settings;