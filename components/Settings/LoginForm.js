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
            password: "",
            staySignIn: "one day",
            showAlert: "none"
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let token = this.responseText;
                if (token === "") {
                    self.setState({
                        showAlert: "initial"
                    })
                } else {
                    window.localStorage.setItem("LoginToken", token);
                    self.props.setLogin();
                    self.props.closeModal();
                    browserHistory.push("Settings");
                }
            }
        };
        xhr.open("POST", "/login", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({
            "username": this.state.username,
            "password": this.state.password,
            "staySignIn": this.state.staySignIn
        }));
    }

    handleInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    closeAlert() {
        this.setState({
            showAlert: "none"
        })
    }

    render() {
        return (
            <div style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{
                    display: this.state.showAlert,
                    padding: "20px",
                    backgroundColor: "red",
                    color: "white",
                    marginBottom: "15px"
                }}>
                    <span className="close-btn" onClick={this.closeAlert}>&times;</span>
                    Wrong username or password, please check it and login again.
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username"><p>Username: </p></label>
                    <input size={20} style={{lineHeight: "1.5em"}} type="text" id="username" name="username"
                           value={this.state.username} onChange={this.handleInput}/><br/>
                    <label htmlFor="password"><p>Password: </p></label>
                    <input size={20} style={{lineHeight: "1.5em"}} type="password" id="password" name="password"
                           value={this.state.password} onChange={this.handleInput}/><br/>
                    <label htmlFor="staySignIn"><p>Stay sign in: </p></label>
                    <input size={20} style={{lineHeight: "1.5em"}} type="radio" id="staySignIn" name="staySignIn"
                           value="no" checked={this.state.staySignIn === "no"} onChange={this.handleInput}/>No
                    <input size={20} style={{lineHeight: "1.5em"}} type="radio" id="staySignIn" name="staySignIn"
                           value="one day" checked={this.state.staySignIn === "one day"} onChange={this.handleInput}/>1
                    day
                    <input size={20} style={{lineHeight: "1.5em"}} type="radio" name="staySignIn"
                           value="one week" checked={this.state.staySignIn === "one week"} onChange={this.handleInput}/>1
                    week
                    <input size={20} style={{lineHeight: "1.5em"}} type="radio" name="staySignIn"
                           value="one month" checked={this.state.staySignIn === "one month"}
                           onChange={this.handleInput}/>1 month
                    <br/>
                    <button style={{margin: "20px 0"}} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export
default
LoginForm