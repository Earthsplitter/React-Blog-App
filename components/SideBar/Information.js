/**
 * Created by wenming on 27/01/2017.
 */
import React from 'react'
import FontAwesome from 'react-fontawesome'


class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            motto: "",
            contactMethod: ""
        }
    }

    componentWillMount() {
        let ajax = new XMLHttpRequest();
        let self = this;
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let info = JSON.parse(this.responseText);
                self.setState({
                    favicon: info.favicon,
                    firstName: info.firstName,
                    lastName: info.lastName,
                    title: info.title,
                    motto: info.motto,
                    contactMethod: info.contactMethod
                })
            }
        };
        ajax.open("GET", "/data/personalInfo", true);
        ajax.send();
    }

    render() {
        return (
            <section style={{ width: '100%', textAlign: 'center', marginTop: '30px'}}>
                <img src={"/assets/image/favicon.png"} alt="Wen Ming's portrait"
                     style={{ border: '1px gold solid', width: '150px', height: '120px'}}/>
                <p className="name">{this.state.firstName} {this.state.lastName}</p>
                <p className="title">{this.state.title}</p>
                <p className="motto">{this.state.motto}</p>
                <ButtonGroup buttons={this.state.contactMethod}/>
            </section>
        )
    }
}

class ButtonGroup extends React.Component {

    render() {
        let smallButtons = [];
        for (let key in this.props.buttons) {
            if (this.props.buttons.hasOwnProperty(key)) {
                smallButtons.push(<ContactButton key={key} addr={this.props.buttons[key]} name={key}/>);
            }
        }
        return (
            <div>
                {smallButtons}
            </div>
        );
    }
}

class ContactButton extends React.Component {
    stopPropagation(e) {
        e.stopPropagation();
    }
    render() {
        const fontAwesome = {
            github: "github-square",
            linkedin: "linkedin-square",
            email: "envelope-square",
            phone: "phone-square"
        };
        let address = this.props.addr;
        return (
            <a onClick={this.stopPropagation} href={address}>
                <FontAwesome name={fontAwesome[this.props.name]} size="2x" className="contact-button"/>
            </a>
        )
    }
}

export default Information