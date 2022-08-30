import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import OrdersPage from './pages/OrdersPage';
import OrderDetail from './pages/OrderDetail';
import Checkout from './pages/CheckoutCustomer';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/seller/orders" component={ OrdersPage } />
      <Route path="/seller/orders/:id" component={ OrderDetail } />
      <Route path="/customer/checkout'" component={ Checkout } />
      {/* <Route path="*" component={ NotFound } /> */}
    </Switch>
  );
}

export default App;
