/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.preventProp = this.preventProp.bind(this);
    }

    preventProp(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <div onClick={this.props.onClick} style={{
                position: 'fixed', left: '0', top: '0', width: '100%', height: '100%',
                overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
                <article onClick={this.preventProp} style={{
                    margin: '10% 15%',
                    backgroundColor: '#fefefe',
                    width: '80%',
                    border: "1px solid #888",
                    boxShadow: '8px 8px 5px #737373',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>
                    <span className="close-tag" onClick={this.props.onClick}>&times;</span>

                    <h1 style={{margin: "0 auto", fontFamily: "'Open Sans', sans-serif", fontSize: "24px"}}>{this.props.title}</h1>
                    <section style={{margin: "10px 20px"}}>
                        {this.props.children}
                    </section>
                </article>
            </div>
        )
    }
}

export default Modal