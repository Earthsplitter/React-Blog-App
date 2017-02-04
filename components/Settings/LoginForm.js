/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let token = this.responseText;
                if (token === "") {
                    //    Todo: send error message
                } else {
                    window.localStorage.setItem("LoginToken", token);
                    self.props.setLogin();
                    self.props.closeModal();
                    browserHistory.push("Settings");
                }
            }
        };
        xhr.open("POST", "/login", true);
        xhr.setRequestHeader("Content-type","application/json");
        xhr.send(JSON.stringify({
            "username": self.state.username,
            "password": self.state.password
        }));
    }

    handleInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        return (
            <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username"><p>Username: </p></label>
                    <input size={20} style={{lineHeight: "1.5em"}} type="text" id="username" name="username"
                           value={this.state.username} onChange={this.handleInput}/><br/>
                    <label htmlFor="password"><p>Password: </p></label>
                    <input size={20} style={{lineHeight: "1.5em"}} type="password" id="password" name="password"
                           value={this.state.password} onChange={this.handleInput}/><br/>
                    <button style={{margin: "20px 0"}} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export
default
LoginForm