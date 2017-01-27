/**
 * Created by wenming on 26/01/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import SideBar from "./components/SideBar/SideBar"
import Home from './components/Home'
import Articles from './components/Articles'
import Projects from './components/Projects'

render((
    <Router history={browserHistory}>
        <Route path="/" component={SideBar}>
            <IndexRoute component={Home}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/projects" component={Projects}/>
        </Route>
    </Router>
), document.getElementById('app'));