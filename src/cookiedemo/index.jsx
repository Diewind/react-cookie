import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Admin from './admin';
import Login from './login';

class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Admin</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    </ul>

                    <Switch>
                    <Route exact path="/" component={Admin}></Route>
                    <Route path="/login" component={Login}></Route>
                    </Switch>
                </div>
                </Router>
        )
    }
}

export default Index;