/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import ProjectGroup from './ProjectGroup'

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
export default Projects