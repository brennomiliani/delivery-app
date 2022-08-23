import React from 'react';
import { Route, Switch } from 'react-dom';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      {/* <Route path="/create" component={ SignIn } />
      <Route path="/login" component={ Login } />
      <Route path="*" component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
