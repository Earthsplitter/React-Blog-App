/**
 * Created by wenming on 06/02/2017.
 */
import React from 'react'
import CodeMirror from 'react-codemirror'
import InputBar from '../Common/InputBar'
require('../../node_modules/codemirror/mode/markdown/markdown');

class ProjectEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            intro: "",
            date:"",
            serial: "",
            img: "",
            code: "here"
        };
        this.updateCode = this.updateCode.bind(this);
        this.handleImg = this.handleImg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /**
     * Handle codeMirror Input
     * @param newCode
     */
    updateCode(newCode) {
        this.setState({
            code: newCode
        });
    }

    componentWillReceiveProps(nextProps) {
        let self = this;
        fetch('/assets/projects/'+nextProps.project.title+".md").then(response => response.text()).then(text => {
            console.log("a");
            this.setState({
                title: nextProps.project.title,
                intro: nextProps.project.intro,
                serial: nextProps.project.serial,
                date: nextProps.project.date,
                code: text
            })
        });
    }

    componentWillMount() {
        let self = this;
        fetch('/assets/projects/'+this.props.project.title+".md").then(response => response.text()).then(text => {
            console.log("b");
            this.setState({
                title: self.props.project.title,
                intro: self.props.project.intro,
                serial: self.props.project.serial,
                date: self.props.project.date,
                code: text
            })
        });
    }

    handleInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });

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

    handleSubmit(e) {
        let sendInfo = Object.assign({}, this.state);
        sendInfo.token = localStorage.getItem("LoginToken");
        let formalSendInfo = JSON.stringify(sendInfo);

        let JSONHeaders = new Headers({
            "Content-Type": "application/json"
        });
        fetch('/settings/projects',{
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display:"flex",flexWrap:"wrap"}}>
                <InputBar item="title" value={this.state.title} handleInput={this.handleInput}>Title: </InputBar>
                <InputBar item="date" value={this.state.date} handleInput={this.handleInput}>Start Date: </InputBar>
                <div style={{width: "100%", padding: "20px 10px 0 10px"}}>
                    <label htmlFor="intro"><p style={{display: "inline", fontWeight: "bold"}}>Introduction: </p></label>
                    <input size={56} style={{lineHeight: "2em", border: "1px solid #ccc", boxShadow:"1px 1px 1px grey"}} type="text" id="intro"
                           name="intro" value={this.state.intro} onChange={this.handleInput}/><br/>
                </div>
                <div style={{width: "100%", padding: "20px 10px"}}>
                    <label htmlFor="image"><p style={{display: "inline", fontWeight: "bold"}}>Cover image: </p></label>
                    <input id="image" name="img" onChange={this.handleImg} type="file"/>
                </div>
                <CodeMirror value={this.state.code} onChange={this.updateCode} options={{lineNumbers: true, mode: 'markdown'}}/>
                <div style={{width: "100%", display:"flex", justifyContent:"center",margin:"20px 0 40px 0"}}>
                    <button className="cursorHoverPointer" style={{borderRadius:"100%", backgroundColor:"red",height:"36px",width:"36px",color:"white",border:"1px solid #ccc"}} type="submit">Save</button>
                </div>
            </form>
        )
    }
}

export default ProjectEditor;