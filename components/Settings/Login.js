/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import Modal from '../Common/Modal'
import LoginForm from './LoginForm'
import {browserHistory} from 'react-router'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.handleLoginModal = this.handleLoginModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    /**
     * toggle portrait to login
     */
    handleLoginModal(e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.props.login && !this.state.showModal) {
            // have login this time
            browserHistory.push("Settings");
        } else {
            // check if save login state
            let xhr = new XMLHttpRequest();
            let self = this;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let state = this.responseText;
                    if (state === "fail") {
                        self.setState((prevState) => {
                            return {
                                showModal: !prevState.showModal
                            }
                        })
                    } else {
                        browserHistory.push("Settings");
                    }
                }
            };
            xhr.open("POST", "/settings/login", true);
            xhr.setRequestHeader("Content-type","application/json");
            xhr.send(JSON.stringify({
                "token":    localStorage.getItem("LoginToken")
            }));
        }
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    render() {
        /**
         * Control modal hide/show
         * @type {null}
         */
        let modal = null;
        if (this.state.showModal) {
            modal = (
                <Modal title="Login" onClick={this.handleLoginModal}>
                    <LoginForm closeModal={this.closeModal} setLogin={this.props.setLogin}
                               submit={this.handleSubmit}/>
                </Modal>
            );
        } else {
            modal = null;
        }
        return (
            <div>
                <span onClick={this.handleLoginModal} className="login cursorHoverPointer fa fa-cog"/>
                {modal}
            </div>
        )
    }
}

export default Login