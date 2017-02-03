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
        const motto = "At school you are engaged not so much in acquiring knowledge as in making mental efforts under " +
            "criticism. A certain amount of knowledge you can indeed with average faculties acquire so as to retain; nor" +
            " need you regret the hours you spent on much that is forgotten, for the shadow of lost knowledge at least " +
            "protects you from many illusions.";
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