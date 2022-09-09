import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Register from './pages/Register';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import SellerOrdersPage from './pages/SellerOrdersPage';
import SellerOrderDetail from './pages/SellerOrderDetail';
import CustomerOrdersPage from './pages/CustomerOrdersPage';
import Checkout from './pages/CheckoutCustomer';
import OrderDetailsCustomer from './pages/OrdDetailsCustomer';
import Admin from './pages/Admin';
import defaultTheme from './assets/styles/themes/Default';
import GlobalStyles from './assets/styles/Global';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
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
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
//
