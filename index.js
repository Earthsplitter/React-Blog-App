/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './components/Home'
import Experience from './components/Experience'
import Articles from './components/Articles'
import Projects from './components/Projects'
import App from './App'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path='/homepage' component={Home}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/projects" component={Projects}/>
        </Route>
        <Route path="/resume.pdf"/>
    </Router>
), document.getElementById('app'));