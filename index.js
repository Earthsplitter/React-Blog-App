/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './components/Home'
import Experience from './components/Experience/Experience'
import Articles from './components/Articles/Articles'
import Projects from './components/Projects/Projects'
import App from './App'
import Settings from './components/Settings/Settings'
import Profile from './components/Settings/Profile'
import ProjectsSetting from './components/Settings/ProjectsSetting'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/settings" component={Settings}>
                <IndexRoute component={Profile}/>
                <Route path="/experienceSetting" component={ProjectsSetting}/>
                <Route path="/articlesSetting" component={ProjectsSetting}/>
                <Route path="/projectsSetting" component={ProjectsSetting}/>
            </Route>
        </Route>
        <Route path="/resume.pdf"/>
    </Router>
), document.getElementById('app'));