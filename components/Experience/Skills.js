/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'
import Subheading from '../Subheading'
import SkillsList from './SkillsList'

class Skills extends React.Component {

    render() {
        const motto = "Intelligence is the ability to avoid doing work, yet getting the work done.";
        return(
            <article style={{width: "100%"}}>
                <Subheading colorStyle={this.props.colorStyle} title="MY SKILLS" motto={motto}/>
                <SkillsList colorStyle={this.props.colorStyle}/>
            </article>
        )
    }
}

export default Skills