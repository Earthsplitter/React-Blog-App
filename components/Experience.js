/**
 * Created by wenming on 29/01/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'


class Experience extends React.Component {

    componentWillMount() {
        browserHistory.push(this.props.location.pathname+"#"+this.props.currentColor);
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <article>
                    <p>Education</p>
                </article>
            </div>
        );
    }
}

export default Experience;