/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'

class Articles extends React.Component {

    componentWillMount() {
        browserHistory.push(this.props.location.pathname+"#"+this.props.currentColor);
    }

    render() {
        return <div>Articles</div>
    }
}

export default Articles