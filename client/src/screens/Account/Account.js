import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect, Switch, Link } from 'react-router-dom';
import History from '../../components/History/History';
import Contact from '../../components/Contact/Contact';
import AddContact from '../../components/AddContact/AddContact';
import Profile from '../../components/Profile/Profile';

import './Account.css'


class Account extends React.Component {
    render() {
        return (
            <div className="account-container">
                <Profile />
                <div className="account-operation">
                    <Switch>
                        <Route exact path='/account' component={History} />
                        <Route path='/account/contact' component={Contact} />
                        <Route path='/account/add_contact' component={AddContact} />
                        <Route path='/account/transfer' component={History} />
                        <Redirect to="/account" />
                    </Switch>
                </div>
            </div>
        )
    }
}


export default Account;