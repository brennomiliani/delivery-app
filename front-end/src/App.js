import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import OrdersPage from './pages/OrdersPage';
import OrderDetail from './pages/OrderDetail';
import Checkout from './pages/CheckoutCustomer';
import OrderDetailsCustomer from './pages/OrdDetailsCustomer';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />

      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route
        path="/customer/orders/:id"
        render={ (props) => (<OrderDetailsCustomer { ...props } />) }
      />

      <Route path="/seller/orders" component={ OrdersPage } />
      <Route path="/seller/orders/:id" component={ OrderDetail } />
    </Switch>
  );
}

export default App;
