/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'
import DegreeItem from './DegreeItem'

class DegreesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            education: []
        }
    }

    componentWillMount() {
        let ajax = new XMLHttpRequest();
        let self = this;
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let education = JSON.parse(this.responseText);
                self.setState((prevState) => {
                    let eduGroup = prevState.education;
                    education.education.forEach((degree) => {
                        eduGroup.push(degree);
                    });
                    return ({
                        education: eduGroup
                    });
                });
            }
        };
        ajax.open("GET", "/data/education", true);
        ajax.send();
    }

    render() {
        const renderDegrees = [];
        this.state.education.forEach((element) => {
            renderDegrees.push(
                <DegreeItem key={element.title} degree={element} colorStyle={this.props.colorStyle}/>);
        });
        let mq = window.matchMedia("(max-width: 800px)");
        const margin = mq.matches?"50px 0 0 0":"100px 0 0 0";
        return (
            <div style={{margin: margin, display: "flex", flexWrap: "wrap"}}>
                {renderDegrees}
            </div>
        )
    }
}

export default DegreesList