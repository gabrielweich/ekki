import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './screens/Login/Login'

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} />

    </Switch>
  );
}

export default App;
