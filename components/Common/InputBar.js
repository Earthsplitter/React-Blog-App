/**
 * Created by wenming on 06/02/2017.
 */
import React from 'react'

class InputBar extends React.Component {
    render() {
        return (
            <div style={{width: "50%", padding: "20px 10px 0 10px"}}>
                <label htmlFor={this.props.item}><p style={{display: "inline", fontWeight: "bold"}}>{this.props.children}</p></label>
                <input size={26} style={{lineHeight: "2em", border: "1px solid #ccc", boxShadow:"1px 1px 1px grey"}} type="text" id={this.props.item}
                       name={this.props.item}
                       value={this.props.value} onChange={this.props.handleInput}/><br/>
            </div>
        )
    }
}

export default InputBar;