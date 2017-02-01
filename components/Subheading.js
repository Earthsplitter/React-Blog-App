/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'

class Subheading extends React.Component {
    render() {
        const colorStyle = "-webkit-gradient(linear, 0 0, 0 bottom, from(" + this.props.colorStyle[0] + "), to(" + this.props.colorStyle[1] + "))";

        return(
            <p style={{margin: "80px 0 20px 0", font: "italic 16px 'Open Sans', sans-serif"}}><span style={{
                fontSize: "26px",
                fontStyle: "normal",
                color: this.props.colorStyle[0],
                backgroundImage: colorStyle,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>{this.props.title} |</span> "{this.props.motto}"</p>
        )
    }
}

export default Subheading