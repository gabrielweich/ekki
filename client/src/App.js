import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './screens/Login/Login';
import Account from './screens/Account/Account';

import { connect } from 'react-redux';



const App = (props) => {
  console.log(props.user)
  let routes = (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  )

  if (!!props.user.id) {
    console.log("tem idddddd")
    console.log(props)
    routes = (
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/" component={Login} />
      </Switch>
    )
  }

  return routes
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App);
