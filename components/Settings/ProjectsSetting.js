/**
 * Created by wenming on 06/02/2017.
 */
import React from 'react'

class ProjectsSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            projects: []
        };
        this.handleSearch = this.handleSearch.bind(this);
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
        ajax.open("GET", "/data/projects?items=5", true);
        ajax.send();
    }

    handleSearch(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        let projects = [];
        this.state.projects.forEach((project) => {
            let ifDisplay = project.title.toLowerCase().includes(this.state.search.toLowerCase());
            projects.push(<tr key={project.title} style={{border: "1px solid #ddd",display:ifDisplay?"table-row":"none"}}>
                <td style={{padding:"12px"}}>{project.title}</td>
                <td style={{padding:"12px"}}>{project.date}</td>
                <td style={{padding:"12px"}}><span className="fa fa-pencil"/> <span className="fa fa-trash"/></td>
            </tr>)
        });

        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <input style={{
                    backgroundImage: "url('assets/image/searchIcon.png')",
                    backgroundRepeat: "no-repeat", fontSize: "16px",
                    backgroundPosition: "10px 8px", padding: "8px 20px 8px 40px", border: "1px solid #ddd"
                }} type="text" id="myInput" onChange={this.handleSearch} value={this.state.search}/>
                <table style={{
                    width: "100%",
                    textAlign: "left",
                    borderCollapse: "collapse",
                    border: "1px solid #ddd",
                    fontFamily: "'roboto',sans-serif",
                    fontSize: "18px"
                }}>
                    <thead style={{fontWeight:"bold",backgroundColor:"#f1f1f1"}}>
                    <tr>
                        <th style={{width: "60%", padding:"12px"}}>Name</th>
                        <th style={{width: "25%", padding:"12px"}}>Date</th>
                        <th style={{width: "15%", padding:"12px"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects}
                    </tbody>
                </table>
            </div>
        )
    }


}

export default ProjectsSetting;