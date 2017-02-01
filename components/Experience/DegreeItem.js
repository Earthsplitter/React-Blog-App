/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'

class DegreeItem extends React.Component {
    render() {
        const colorStyle = "-webkit-gradient(linear, 0 0, 0 bottom, from(" + this.props.colorStyle[0] + "), to(" + this.props.colorStyle[1] + "))";
        const degree = this.props.degree;
        return(
            <section style={{width: "50%"}}>
                <h3 style={{backgroundImage: colorStyle, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    font: "25px 'Open Sans', sans-serif"}}>
                    {degree.title} of {degree.class}
                </h3>
                <hr/>
                <ul style={{listStyle: "none", paddingLeft: "0"}}>
                    <li><p><span style={{fontWeight:'bold'}}>Major</span>: {degree.major}</p></li>
                    <li><p>{degree.schoolName}</p></li>
                    <li><p>{degree.location}</p></li>
                    <li><p>From {degree.startDate} to {degree.endDate}</p></li>
                </ul>
            </section>
        )
    }
}

export default DegreeItem