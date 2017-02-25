/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import Subheading from '../Common/Subheading'
import {browserHistory} from 'react-router'

class Articles extends React.Component {

    componentWillMount() {
        browserHistory.push(this.props.location.pathname+"#"+this.props.currentColor);
    }

    render() {
        let mq = window.matchMedia("(max-width: 800px)");
        const margin = mq.matches?"0 10px":"0 100px";
        const motto = `Blogging is just writing — writing using a particularly efficient type of publishing technology.`;
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: margin}}>
                <Subheading colorStyle={this.props.colorStyle} title="Articles" motto={motto}/>
            </div>
        )
    }
}

export default Articles