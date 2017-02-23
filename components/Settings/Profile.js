/**
 * Created by wenming on 05/02/2017.
 */
import React from 'react';
import InputBar from '../Common/InputBar'
import {browserHistory} from 'react-router'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            motto: "",
            img: "",
            contactMethod: {
                github: "",
                linkedin: "",
                email: "",
                phone: ""
            },
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImg = this.handleImg.bind(this);
    }

    /**
     * Load information from server before rendering page
     */
    componentWillMount() {
        let self = this;
        /**
         * If fetch is supported, use fetch. Otherwise use XMLHttpRequest
         */
        if (fetch) {
            fetch('/data/personalInfo')
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    this.setState(json);
                });
        } else {
            let xhr = new XMLHttpRequest();
            let self = this;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let info = JSON.parse(this.responseText);
                    self.setState(info);
                }
            };
            xhr.open("GET", "/data/personalInfo", true);
            xhr.send();
        }
    }

    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "github" || name === "linkedin" || name === "email" || name === "phone") {
            this.setState((prevState) => {
                let newContactMethod = Object.assign({}, prevState.contactMethod);
                newContactMethod[name] = value;
                return {
                    contactMethod: newContactMethod
                }
            })
        } else {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    handleSubmit(e) {
        /**
         * Prevent submit before source loaded, which will cause upload empty file and override all information
         */
        if (this.state.firstName === "") {
            return;
        }
        e.preventDefault();
        let sendInfo = Object.assign({}, this.state);
        sendInfo.token = localStorage.getItem("LoginToken");
        let formalSendInfo = JSON.stringify(sendInfo);

        // use fetch or XMLHttpRequest
        if (fetch) {
            let JSONHeaders = new Headers({
                "Content-Type": "application/json"
            });
            fetch('/settings/personal',{
                method: 'POST',
                headers: JSONHeaders,
                body: formalSendInfo
            })
                .then(response => {
                    return response.text();
                })
                .then(text => {
                    if (text === 'fail') {
                        browserHistory.push("/");
                        alert("Timeout! Please Login Again!");
                    } else {
                        location.reload();
                    }
                })
        } else {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let state = this.responseText;
                    if (state === "fail") {
                        browserHistory.push("/");
                        alert("Timeout! Please Login Again!");
                    } else {
                        location.reload();
                    }
                }
            };
            xhr.open("POST", "/settings/personal", true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(formalSendInfo);
        }
    }

    handleImg(e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        let self = this;
        reader.onload = function (e) {
            self.setState({
                img: e.target.result
            });
        };
    }

    render() {
        let mq = window.matchMedia("(max-width: 1080px)");
        return (
            <form style={{display: "flex", flexWrap: "wrap"}} onSubmit={this.handleSubmit}>
                <InputBar item="firstName" value={this.state.firstName} handleInput={this.handleInput}>First Name: </InputBar>
                <InputBar item="lastName" value={this.state.lastName} handleInput={this.handleInput}>Last Name: </InputBar>
                <InputBar item="title" value={this.state.title} handleInput={this.handleInput}>Title: </InputBar>
                <p style={{width: "100%", margin:"20px 0 0 0"}}>Personal Image(must be a png file):</p>
                <div style={{width: "100%", padding: "10px 10px"}}>
                    <input id="image" name="img" onChange={this.handleImg} type="file"/>
                </div>
                <p style={{width: "100%", margin:"20px 0 0 0"}}>Contact Method:</p>
                <InputBar item="github" value={this.state.contactMethod.github} handleInput={this.handleInput}><span className="fa fa-github"/>GitHub: </InputBar>
                <InputBar item="linkedin" value={this.state.contactMethod.linkedin} handleInput={this.handleInput}><span className="fa fa-linkedin"/>LinkedIn: </InputBar>
                <InputBar item="email" value={this.state.contactMethod.email} handleInput={this.handleInput}><span className="fa fa-envelope"/>Email: </InputBar>
                <InputBar item="phone" value={this.state.contactMethod.phone} handleInput={this.handleInput}><span className="fa fa-phone"/>Phone: </InputBar>
                <div style={{width: mq.matches ? "100%" : "50%", padding: "20px 10px 0 10px"}}>
                    <label htmlFor="motto"><p style={{display: "inline", fontWeight:"bold"}}>Motto: </p></label>
                    <textarea style={{border: "1px solid #ccc"}} cols="48" rows="4" name="motto"
                              value={this.state.motto} onChange={this.handleInput}/>
                </div>
                <div style={{width: "100%", display:"flex", justifyContent:"center",margin:"20px 0"}}>
                    <button className="cursorHoverPointer" style={{borderRadius:"100%", backgroundColor:"red",height:"36px",width:"36px",color:"white",border:"1px solid #ccc"}} type="submit">Save</button>
                </div>
            </form>
        )
    }
}

export default Profile;