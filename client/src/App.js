import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './screens/Login/Login';
import Account from './screens/Account/Account';

import { connect } from 'react-redux';



const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  )

  if (!!props.user.id) {
    routes = (
      <Switch>
        <Route path="/account" component={Account} />
        <Redirect to="/account" />
      </Switch>
    )
  }

  return routes
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App);
