/**
 * Created by wenming on 03/02/2017.
 */
import React from 'react'
import {browserHistory} from 'react-router'

class Settings extends React.Component {

    componentWillMount() {
        browserHistory.push(this.props.location.pathname + "#" + this.props.currentColor);
    }

    render() {
        return <div>Settings</div>
    }
}

export default Settings;