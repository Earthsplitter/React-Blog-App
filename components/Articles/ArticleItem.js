/**
 * Created by wenming on 27/02/2017.
 */
import React from 'react'

class ArticleItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    componentWillMount() {
        fetch("assets/articles/"+this.props.file)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({
                    content: text
                });
            })
    }

    render() {
        let intro = this.state.content.slice(0,128).replace(/\s|#|`/g," ") + " ......";
        return(
            <article style={{marginBottom: "50px"}}>
                <h2 style={{fontFamily: "'Open Sans', sans-serif"}}>{this.props.file.slice(0,-3)}</h2>
                <hr style={{border: "2px solid grey"}}/>
                <p style={{fontSize: "11px", fontStyle: "italic", margin:"3px 0"}}>{this.props.ctime.slice(0,10)}</p>
                <p style={{fontSize: "13px"}}>{intro}</p>
            </article>
        )
    }
}

export default ArticleItem;