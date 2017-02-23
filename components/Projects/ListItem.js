/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'
import Modal from '../Common/Modal'

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState((prevState) => {
            return {showModal: !prevState.showModal}
        });
    }

    render() {
        /**
         * shorthand for props.project
         */
        const project = this.props.project;
        /**
         * Set colorStyle gradient
         */
        const imageSource = "/assets/image/" + project.title + '.png';
        const borderImage = "linear-gradient(" + this.props.colorStyle[0] + ", " + this.props.colorStyle[1] + ") 10";
        const colorStyle = "-webkit-gradient(linear, 0 0, 0 bottom, from(" + this.props.colorStyle[0] + "), to(" + this.props.colorStyle[1] + "))";

        /**
         * Set modal
         */
        let modal = null;
        if (this.state.showModal) {
            modal = <Modal title={project.title} onClick={this.handler}/>;
        } else {
            modal = null;
        }

        return (
            <section style={{margin: "50px 0"}}>
                <h1 onClick={this.handler} className="projectModal" style={{
                    display: "inline",
                    font: "normal 24px 'Roboto', sans-serif",
                    color: this.props.colorStyle[0],
                    backgroundImage: colorStyle,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>{project.title}</h1>
                <span style={{margin: "0 20px", font: "italic 14px 'Open Sans', sans-serif"}}>{project.date}</span>
                <hr style={{borderColor: this.props.colorStyle[0]}}/>
                <p style={{font: "normal 16px 'Roboto', sans-serif"}}>{project.intro}</p>
                <img onClick={this.handler} className="cursorHoverPointer" style={{
                    maxWidth: "310px", maxHeight: "210px", clear: "both", display: "block", margin: "auto",
                    border: "5px solid", WebkitBorderImage: borderImage, OBorderImage: borderImage, MozBorderImage: borderImage
                }} src={imageSource}/>
                {modal}
            </section>
        )
    }
}

export default ListItem;