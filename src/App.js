import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { LoginRoute, PrivateRoute } from './Components/PrivateRoute';
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Redirect to="/dashboard" />} exact />
        <LoginRoute path="/login" component={Login} exact />
        <PrivateRoute path="/dashboard" exact={false} component={Dashboard} />
        );
      </Switch>
    </Router>
  );
};

export default App;
