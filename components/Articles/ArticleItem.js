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
        return(
            <article>
                <h3>{this.props.file.slice(0,-3)}</h3>
                <p>{this.props.ctime.slice(0,10)}</p>
                <p>{this.state.content.slice(0,30)}</p>
            </article>
        )
    }
}

export default ArticleItem;