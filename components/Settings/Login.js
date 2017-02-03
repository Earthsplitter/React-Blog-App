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
    }

    /**
     * toggle portrait to login
     */
    handleLoginModal(e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.props.login && !this.state.showModal) {
            browserHistory.push("Settings");
        } else {
            this.setState((prevState) => {
                return {
                    showModal: !prevState.showModal
                }
            })
        }
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
                    <LoginForm closeModal={this.handleLoginModal} setLogin={this.props.setLogin}
                               submit={this.handleSubmit}/>
                </Modal>
            );
        } else {
            modal = null;
        }
        return (
            <div>
                <span onClick={this.handleLoginModal} className="login fa fa-cog"/>
                {modal}
            </div>
        )
    }
}

export default Login