/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'
import SkillItem from './SkillItem'

class SkillsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }

    componentWillMount() {
        let ajax = new XMLHttpRequest();
        let self = this;
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let skills = JSON.parse(this.responseText);
                self.setState((prevState) => {
                    let skillGroup = prevState.skills;
                    skills.skills.forEach((skill) => {
                        skillGroup.push(skill);
                    });
                    return ({
                        skills: skillGroup
                    });
                });
            }
        };
        ajax.open("GET", "assets/data/skills.json", true);
        ajax.send();
    }

    render() {
        const renderSkills = [];
        this.state.skills.forEach((element) => {
            renderSkills.push(
                <SkillItem key={element.class} skill={element} colorStyle={this.props.colorStyle}/>);
        });

        return (
            <div style={{margin: "100px 0 0 0", display: "flex"}}>
                {renderSkills}
            </div>
        )
    }
}

export default SkillsList