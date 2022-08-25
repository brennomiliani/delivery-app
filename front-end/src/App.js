import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import OrdersPage from './pages/OrdersPage';
import OrderDetail from './pages/OrderDetail';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/seller/orders" component={ OrdersPage } />
      <Route path="/seller/orders/:id" component={ OrderDetail } />
      <Redirect exact from="/" to="/login" />
      {/* <Route path="/customer/products" component={ Login } /> */}
      {/* <Route path="/create" component={ SignIn } />
      <Route path="*" component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
