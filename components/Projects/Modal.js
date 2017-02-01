/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'

class Modal extends React.Component {

    render() {
        return (
            <div style={{
                position:'fixed', left:'0', top:'0', width:'100%', height:'100%',
                overflow:'auto', backgroundColor:'rgba(0,0,0,0.5)'
            }}>
                <article style={{margin: '10% 15%', backgroundColor: '#fefefe', width: '80%', border: "1px solid #888",
                    boxShadow: '8px 8px 5px #737373', display:'flex', flexDirection: 'column', justifyContent: 'flex-start'
                }}>
                    <span className="close-tag" onClick={this.props.onClick}>&times;</span>
                    <p>Some words</p>
                </article>
            </div>
        )
    }
}

export default Modal