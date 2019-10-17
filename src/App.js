import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserList from './Users/containers/UserList';

function App() {
  let routes = (
    <Switch>
      <Route path="/user-list" component={UserList} />
      <Route path="/" exact component={UserList} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="center">
      {routes}
    </div>
  );
}

export default App;
