import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import Admin from './pages/Admin'

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/home" component={Home}/>
            <Route path="/admin" component={Admin}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
