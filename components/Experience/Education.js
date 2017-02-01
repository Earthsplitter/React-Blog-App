/**
 * Created by wenming on 01/02/2017.
 */
import React from 'react'
import Subheading from '../Subheading'
import DegreesList from './DegreesList'

class Education extends React.Component {

    render() {
        const motto = "At school you are engaged not so much in acquiring knowledge as in making mental efforts under " +
            "criticism. A certain amount of knowledge you can indeed with average faculties acquire so as to retain; nor" +
            " need you regret the hours you spent on much that is forgotten, for the shadow of lost knowledge at least " +
            "protects you from many illusions.";
        return (
            <article style={{width: "100%"}}>
                <Subheading colorStyle={this.props.colorStyle} title="MY EDUCATION" motto={motto}/>
                <DegreesList colorStyle={this.props.colorStyle}/>
            </article>
        )
    }
}

export default Education