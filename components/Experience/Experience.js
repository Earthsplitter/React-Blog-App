/**
 * Created by wenming on 29/01/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'
import Education from './Education'
import Skills from './Skills'


class Experience extends React.Component {

    componentWillMount() {
        browserHistory.push(this.props.location.pathname + "#" + this.props.currentColor);
    }

    render() {
        let mq = window.matchMedia("(max-width: 800px)");
        const margin = mq.matches?"0 10px":"0 100px";
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: margin}}>
                <Education colorStyle={this.props.colorStyle}/>
                <Skills colorStyle={this.props.colorStyle}/>
            </div>
        );
    }
}

export default Experience;