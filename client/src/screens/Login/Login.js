import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Login.css';


class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <h1 className="login-title">Ekki</h1>
                <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                </Switch>
            </div>
        )
    }
}


export default Login;