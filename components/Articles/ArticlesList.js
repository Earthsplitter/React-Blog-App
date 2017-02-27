/**
 * Created by wenming on 26/02/2017.
 */
import React from 'react'
import ArticleItem from './ArticleItem'

class ArticlesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesList: []
        };
    }

    componentWillMount() {
        if (fetch) {
            fetch("/data/articles?position=0")
                .then(response => {
                    return response.json()
                })
                .then(articles => {
                    this.setState((prevState) => {
                        return ({
                            articlesList: prevState.articlesList.concat(articles)
                        })
                    });
                })
        }
    }

    render() {
        let articles = [];
        this.state.articlesList.forEach((article) => {
            articles.push(<ArticleItem key={article.title} file={article.title} ctime={article.ctime}/>);
        });
        return (
            <div style={{width: "100%"}}>
                {articles}
            </div>
        )
    }
}

export default ArticlesList;