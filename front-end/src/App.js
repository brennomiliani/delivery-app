import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import SellerOrdersPage from './pages/SellerOrdersPage';
import SellerOrderDetail from './pages/SellerOrderDetail';
import CustomerOrdersPage from './pages/CustomerOrdersPage';
import Checkout from './pages/CheckoutCustomer';
import OrderDetailsCustomer from './pages/OrdDetailsCustomer';
import Admin from './pages/Admin';

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
      <Route path="/customer/orders" component={ CustomerOrdersPage } />

      <Route path="/seller/orders/:id" component={ SellerOrderDetail } />
      <Route path="/seller/orders" component={ SellerOrdersPage } />

      <Route path="/admin/manage" component={ Admin } />

    </Switch>
  );
}

export default App;
