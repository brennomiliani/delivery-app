import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
// import Login from './pages/Login';

function App() {
  return (
    <Switch>
      {/* <Route path="/" component={ Login } /> */}
      <Route exact path="/" component={ Register } />
      {/* <Route path="/create" component={ SignIn } />
      <Route path="*" component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
