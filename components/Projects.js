/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'

class Projects extends React.Component {
    render() {
        const colorStyle = "-webkit-gradient(linear, 0 0, 0 bottom, from(" + this.props.colorStyle[0] + "), to(" + this.props.colorStyle[1] + "))";
        return (
            <div style={{display: "flex", flexDirection:"column", alignItems: "center", margin: "0 100px"}}>
                <p style={{margin: "80px 0 20px 0", font: "italic 16px 'Open Sans', sans-serif"}}><span style={{
                    fontSize: "26px",
                    fontStyle: "normal",
                    color: this.props.colorStyle[0],
                    backgroundImage: colorStyle,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>MY CODE |</span> "Always code as if the guy who ends up maintaining your code will be a violent
                    psychopath
                    who knows where you live."</p>
                <ProjectGroup colorStyle={this.props.colorStyle}/>
            </div>);
    }
}

class ProjectGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        let ajax = new XMLHttpRequest();
        let self = this;
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let projects = JSON.parse(this.responseText);
                self.setState((prevState) => {
                    let proGroup = prevState.projects;
                    projects.projects.forEach((project) => {
                        proGroup.push(project);
                    });
                    return ({
                        projects: proGroup
                    });
                });
            }
        };
        ajax.open("GET", "./../../data/projects.json", true);
        ajax.send();
    }

    render() {
        const renderProjects = [];
        const borderImage = "linear-gradient("+ this.props.colorStyle[0] +", "+ this.props.colorStyle[1] + ") 10";
        const colorStyle = "-webkit-gradient(linear, 0 0, 0 bottom, from(" + this.props.colorStyle[0] + "), to(" + this.props.colorStyle[1] + "))";
        this.state.projects.forEach((project) => {
            const imageSource = "./../assets/image/"+project.img;
           renderProjects.push(
               <section key={project.title} style={{margin: "50px 0"}}>
                   <h1 style={{
                       display: "inline",
                       font: "normal 24px 'Roboto', sans-serif",
                       color: this.props.colorStyle[0],
                       backgroundImage: colorStyle,
                       WebkitBackgroundClip: "text",
                       WebkitTextFillColor: "transparent"
                   }}>{project.title}</h1>
                   <span style={{margin: "0 20px", font: "italic 14px 'Open Sans', sans-serif"}}>{project.date}</span>
                   <hr style={{borderColor: this.props.colorStyle[0]}}/>
                   <p style={{font: "normal 16px 'Roboto', sans-serif"}}>{project.intro}</p>
                   <img style={{
                       maxWidth: "310px", maxHeight: "210px", clear: "both", display: "block", margin: "auto",
                       border: "5px solid", WebkitBorderImage: borderImage, OBorderImage: borderImage, MozBorderImage: borderImage
                   }} src={imageSource}/>
               </section>
           )
        });
        return(<div style={{width: "100%"}}>
            {renderProjects}
        </div>);
    }
}

export default Projects