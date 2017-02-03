/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import ProjectList from './ProjectList'
import {browserHistory} from 'react-router'
import Subheading from '../Common/Subheading'

class Projects extends React.Component {

    componentWillMount() {
        browserHistory.push(this.props.location.pathname + "#" + this.props.currentColor);
    }


    render() {
        let mq = window.matchMedia("(max-width: 800px)");
        const margin = mq.matches?"0 10px":"0 100px";
        let motto = "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.";
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: margin}}>
                <Subheading colorStyle={this.props.colorStyle} title="MY CODES" motto={motto} />
                <ProjectList colorStyle={this.props.colorStyle}/>
            </div>);
    }
}
export default Projects