import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { connect } from 'react-redux';


import './Login.css';


class Login extends React.Component {
    render() {
        console.log(this.props)
        if (!!this.props.user.id)
            return <Redirect to="/account" />

        return (
            <div className="login-container">
                <h1 className="login-title">Ekki</h1>
                <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps)(Login);