/**
 * Created by wenming on 06/02/2017.
 */
import React from 'react'
import CodeMirror from 'react-codemirror'
import InputBar from '../Common/InputBar'

class ProjectEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            intro: "",
            date:"",
            img: "",
            code: "here"
        };
        this.updateCode = this.updateCode.bind(this);
        this.handleImg = this.handleImg.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.project.title,
            intro: nextProps.project.intro,
            date: nextProps.project.date
        })
    }

    componentWillMount() {
        this.setState({
            title: this.props.project.title,
            intro: this.props.project.intro,
            date: this.props.project.date
        })
    }

    handleInput(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });

    }

    handleImg(e) {
        this.setState({
            img: e.target.files[0].name
        })
    }

    render() {
        return (
            <form style={{display:"flex",flexWrap:"wrap"}}>
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
                <CodeMirror value={this.state.code} onChange={this.updateCode} options={{lineNumbers: true}}/>
            </form>
        )
    }
}

export default ProjectEditor;