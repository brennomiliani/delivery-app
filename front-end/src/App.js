import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
