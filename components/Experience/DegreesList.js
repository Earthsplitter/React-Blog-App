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
        ajax.open("GET", "assets/data/education.json", true);
        ajax.send();
    }

    render() {
        const renderDegrees = [];
        this.state.education.forEach((element) => {
            renderDegrees.push(
                <DegreeItem key={element.title} degree={element} colorStyle={this.props.colorStyle}/>);
        });

        return (
            <div style={{margin: "100px 0 0 0", display: "flex", flexWrap: "wrap"}}>
                {renderDegrees}
            </div>
        )
    }
}

export default DegreesList