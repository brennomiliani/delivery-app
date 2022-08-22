import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/register';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Register } />
      {/* <Route path="/create" component={ SignIn } />
      <Route path="/login" component={ Login } />
      <Route path="*" component={ NotFound } /> */}
    </Switch>);
}

export default App;
