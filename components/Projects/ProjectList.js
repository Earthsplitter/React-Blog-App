/**
 * Created by wenming on 30/01/2017.
 */
import React from 'react'
import ListItem from './ListItem'

class ProjectList extends React.Component {

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
        ajax.open("GET", "./../../assets/data/projects.json", true);
        ajax.send();
    }

    render() {
        const renderProjects = [];
        this.state.projects.forEach((project) => {
            // const imageSource = "./../assets/image/"+project.img;
            renderProjects.push(
                <ListItem key={project.title} project={project} colorStyle={this.props.colorStyle}/>
            )
        });
        return (
            <div style={{width: "100%"}}>
            {renderProjects}
            </div>
        );
    }
}

export default ProjectList;