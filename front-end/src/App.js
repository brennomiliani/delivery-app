import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Redirect exact from="/" to="/login" />
      {/* <Route path="/customer/products" component={ Login } /> */}
      {/* <Route path="/create" component={ SignIn } />
      <Route path="*" component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
