/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'

class Subheading extends React.Component {
    render() {
        const colorStyle = "-webkit-gradient(linear, 0 0, 0 bottom, from(" + this.props.colorStyle[0] + "), to(" + this.props.colorStyle[1] + "))";
        let mq = window.matchMedia("(max-width: 800px)");
        const margin = mq.matches?"40px 0 20px 0":"80px 0 20px 0";
        return(
            <p style={{margin: margin, font: "italic 16px 'Open Sans', sans-serif"}}><span style={{
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

Subheading.propsType = {
    colorStyle: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    motto: React.PropTypes.string.isRequired
};

export default Subheading